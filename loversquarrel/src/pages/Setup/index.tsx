import { useAppSelector } from "../../redux/store";
import baseStyle from "../../base.module.css";
import style from "./style.module.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ChaosPanel from "../../components/ChaosPanel/ChaosPanel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArgumentInput from "../../components/ArgumentInput/ArgumentInput";

function Setup() {
    const gameSettings = useAppSelector((state) => state.game);
    const [isBfTabActive, setIsBfTabActive] = useState(gameSettings.game.currentUserType === "boyfriend");
    const navigate = useNavigate();
    const userData = useAppSelector((state) => state.user);

    const configure = async () => {
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
                    <div className={style.content}>
                        <Tabs className={style.tabs}>
                            <div className={style.tabsHeader}>
                                <TabList className={style.tabList}>
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab}
                                            onClick={() => setIsBfTabActive(tab === "Boyfriend")}
                                            className={`${style.tab} `}
                                            selectedClassName={`${tab === "girlfriend" ? style.gfTab : style.bfTab} ${style.activeTab}`}
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
                                    selectedClassName={style.activePanel}>
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
    } else {
        setTimeout(() => {
            navigate("/");
        }, 500);
        return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <div className={[baseStyle.userLoggingOutContainer, baseStyle.glassCard].join(' ')}>
                    <div className={baseStyle.userLoggingOut}>User logging out...</div>
                </div>
            </div>
        );
    }
}

export default Setup;