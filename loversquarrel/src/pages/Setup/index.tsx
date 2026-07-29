import { useAppDispatch, useAppSelector } from "../../redux/store";
import baseStyle from "../../base.module.css";
import style from "./style.module.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ChaosPanel from "../../components/ChaosPanel/ChaosPanel";
import { useState } from "react";
import { setTraits } from "../../redux/gameSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { UserState } from "../../redux/userSlice";
import useSetInitialArg from "../../hooks/useSetInitialArg";
import ArgumentInput from "../../components/ArgumentInput/ArgumentInput";

function Setup() {
    const gameSettings = useAppSelector((state) => state.game);
    const dispatch = useAppDispatch();
    const [isBfTabActive, setIsBfTabActive] = useState(gameSettings.game.currentUserType === "Boyfriend");
    const navigate = useNavigate();
    const userData: UserState = useSelector((state: any) => state.user);

    const [bfArgument, setBfArgument] = useState("");
    const [gfArgument, setGfArgument] = useState("");

    const { mutate: setInitialArg, isPending, isSuccess, error } = useSetInitialArg();


    const configure = async () => {
        // Reformat arguments if needed prior to configure


        try {
            // Send initial arguments and configuration to game backend APIs

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
                                    <ArgumentInput
                                        isBfTabActive={isBfTabActive} />
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