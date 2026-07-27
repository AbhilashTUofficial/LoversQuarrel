import { useAppDispatch, useAppSelector } from "../../redux/store";
import baseStyle from "../../base.module.css";
import style from "./style.module.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BoyfriendPanel from "../../components/PlayerPanel/BoyfriendPanel/BoyfriendPanel";
import ChaosPanel from "../../components/ChaosPanel/ChaosPanel";
import { useState } from "react";
import { setTraits } from "../../redux/gameSlice";
import GirlfriendPanel from "../../components/PlayerPanel/GirlfriendPanel/GirlfriendPanel";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { UserState } from "../../redux/userSlice";
import useSetInitialArg from "../../hooks/useSetInitialArg";

function Setup() {
    const gameSettings = useAppSelector((state) => state.game);
    const dispatch = useAppDispatch();
    const [isBfTabActive, setIsBfTabActive] = useState(gameSettings.game.currentUserType === "Boyfriend");
    const navigate = useNavigate();
    const userData: UserState = useSelector((state: any) => state.user);

    const [bfArgument, setBfArgument] = useState("");
    const [gfArgument, setGfArgument] = useState("");
    const [isReformatting, setIsReformatting] = useState(false);

    useSetInitialArg();

    const reformatArgumentText = async (text: string, userType: "Boyfriend" | "Girlfriend") => {
        if (!text.trim()) return;
        setIsReformatting(true);
        try {
            const res = await fetch("http://localhost:5000/api/v1/ai/reformatArgument", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ argument: text })
            });
            const data = await res.json();
            if (data.reformatted) {
                if (userType === "Boyfriend") setBfArgument(data.reformatted);
                else setGfArgument(data.reformatted);
            }
        } catch (err) {
            console.error("Error reformatting argument:", err);
        } finally {
            setIsReformatting(false);
        }
    };

    const ArgumentInput = () => {
        const currentArg = isBfTabActive ? bfArgument : gfArgument;
        const setArg = isBfTabActive ? setBfArgument : setGfArgument;
        const currentUserType = isBfTabActive ? "Boyfriend" : "Girlfriend";

        return (
            <div className={style.argumentInputCont}>
                <textarea
                    placeholder="Enter Argument"
                    className={style.argumentInput}
                    value={currentArg}
                    onChange={(e) => setArg(e.target.value)}
                    onBlur={() => reformatArgumentText(currentArg, currentUserType)}
                />
                <button
                    onClick={() => reformatArgumentText(currentArg, currentUserType)}
                    disabled={isReformatting}
                    className={`${style.argumentBtn} ${isBfTabActive ? style.bfArgumentBtn : style.gfArgumentBtn}`}
                >
                    {isReformatting ? "Reformatting..." : "Reformat & Fix Grammar"}
                </button>
                <button onClick={generateTraits} className={`${style.argumentBtn} ${isBfTabActive ? style.bfArgumentBtn : style.gfArgumentBtn}`}>
                    Generate Traits from Argument
                </button>
                <aside className={[baseStyle.glassCard, style.traitsContainer].join(' ')}>
                    {isBfTabActive ? <BoyfriendPanel /> : <GirlfriendPanel />}
                </aside>
            </div>
        );
    };

    const generateTraits = () => {
        dispatch(setTraits({
            trait: {
                intellect: 60,
                logic: 70,
                drama: 10,
                sarcasm: 20,
                stubbornness: 80,
                confidence: 70,
                memory: 90,
                empathy: 10
            },
            userType: isBfTabActive ? "Boyfriend" : "Girlfriend"
        }));
    };

    const configure = async () => {
        // Reformat arguments if needed prior to configure
        if (bfArgument) await reformatArgumentText(bfArgument, "Boyfriend");
        if (gfArgument) await reformatArgumentText(gfArgument, "Girlfriend");

        try {
            // Send initial arguments and configuration to game backend APIs
            await fetch("http://localhost:5000/api/v1/game/setInitialArgument", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "defaultUser",
                    boyfriend: { initialArgument: bfArgument },
                    girlfriend: { initialArgument: gfArgument }
                })
            });

            await fetch("http://localhost:5000/api/v1/game/addAllGameSettings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "defaultUser",
                    boyfriend: {
                        initialArgument: bfArgument,
                        traits: gameSettings.game.boyfriendTraits,
                        tags: gameSettings.game.boyfriendTags,
                        username: "Boyfriend",
                        id: "bf1"
                    },
                    girlfriend: {
                        initialArgument: gfArgument,
                        traits: gameSettings.game.girlfriendTraits,
                        tags: gameSettings.game.girlfriendTags,
                        username: "Girlfriend",
                        id: "gf1"
                    }
                })
            });
        } catch (error) {
            console.error("Failed to save game settings:", error);
        }

        navigate('/game');
    };

    const tabs = gameSettings.gamemode === "solo"
        ? [gameSettings.game.currentUserType]
        : ["Boyfriend", "Girlfriend"];

    if (userData.loggedin) {
        return (
            <div className={`${style.setupContainer}`}>
                <div className={`${baseStyle.glassCard} ${style.setupCard}`}>
                    <div className={style.setupHeader}>
                        {gameSettings.gamemode === "ai" ? (
                            <div className={style.headerTxt}>Configure AI</div>
                        ) : (
                            <div className={style.headerTxt}>Configure {gameSettings.game.currentUserType}</div>
                        )}
                    </div>
                    <div className={style.content}>
                        <Tabs className={style.tabs}>
                            <div className={style.tabsHeader}>
                                <TabList className={style.tabList}>
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab}
                                            onClick={() => setIsBfTabActive(tab === "Boyfriend")}
                                            className={`${style.tab} `}
                                            selectedClassName={`${tab === "Girlfriend" ? style.gfTab : style.bfTab} ${style.activeTab}`}
                                        >
                                            {tab}
                                        </Tab>
                                    ))}
                                </TabList>
                                <button onClick={configure} className={`${style.configureBtn}`}>Configure</button>
                            </div>

                            {tabs.map((tab) => (
                                <TabPanel
                                    key={tab}
                                    className={style.tabPanel}
                                    selectedClassName={style.activePanel}
                                >
                                    <ArgumentInput />
                                    <ChaosPanel />
                                </TabPanel>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
    else {
        setTimeout(() => {
            navigate("/")
        }, 500)
        return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <div className={[baseStyle.userLoggingOutContainer, baseStyle.glassCard].join(' ')}>
                    <div className={baseStyle.userLoggingOut}>User logging out...</div>
                </div>
            </div>
        )
    }

}

export default Setup;