import { useDispatch, useSelector } from "react-redux"
import baseStyle from "../../base.module.css";
import style from "./style.module.css"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BoyfriendPanel from "../../components/PlayerPanel/BoyfriendPanel/BoyfriendPanel";
import ChaosPanel from "../../components/ChaosPanel/ChaosPanel";
import { useState } from "react";
import { setTraits } from "../../redux/gameSlice";
import GirlfriendPanel from "../../components/PlayerPanel/GirlfriendPanel/GirlfriendPanel";
import { useNavigate } from "react-router-dom";
function Setup() {

    const gameSettings = useSelector((state: any) => state.game)
    const dispatch = useDispatch();
    const [isBfTabActive, setIsBfTabActive] = useState(gameSettings.game.currentUserType == "Boyfriend");
    const navigate = useNavigate();

    const ArgumentInput = () => {
        return (<div className={style.argumentInputCont}>
            <textarea placeholder='Enter Argument' className={style.argumentInput} />
            <button onClick={generateTraits} className={`${style.argumentBtn} ${isBfTabActive ? style.bfArgumentBtn : style.gfArgumentBtn}`}>Generate Traits from Argument</button>
            <aside className={[baseStyle.glassCard, style.traitsContainer].join(' ')}>
                {
                    isBfTabActive ?
                        <BoyfriendPanel /> :
                        <GirlfriendPanel />
                }
            </aside>
        </div>)
    }

    const generateTraits = () => {
        //TODO: need to implement the logic for generating traits
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
        }))
    }

    const configure = () => {
        navigate('/game')
    }

    const tabs =
        gameSettings.gamemode === "solo" ?
            [gameSettings.game.currentUserType] : ["Boyfriend", "Girlfriend"];


    return (
        <div className={`${style.setupContainer}`}>
            <div className={`${baseStyle.glassCard} ${style.setupCard}`}>

                <div className={style.setupHeader}>
                    {
                        gameSettings.game.gamemode === "ai" ?
                            <div className={style.headerTxt}>Configure AI</div> :
                            <div className={style.headerTxt}>Configure {gameSettings.game.currentUserType}</div>
                    }
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
                                        selectedClassName={`${tab === "Girlfriend" ? style.gfTab : style.bfTab} ${style.activeTab}`}>
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
                                <ArgumentInput />
                                <ChaosPanel />
                            </TabPanel>
                        ))}
                    </Tabs>

                </div>

            </div>
        </div>
    )
}

export default Setup