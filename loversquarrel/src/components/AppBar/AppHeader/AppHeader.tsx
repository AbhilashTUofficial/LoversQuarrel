import styles from "./style.module.css";
import baseStyle from "../../../base.module.css";
import LayoutStyle from "../../../layout.module.css";
import logo from "../../../assets/logo.png";
import VerticalDivider from "../../Divider/VerticalDivider";
import CaseCard from "../CaseCard/CaseCard";
import RoundsCard from "../RoundsCard/RoundsCard";
import { Astroid, HandFist, MoonStar, Settings, Share2, UserRound } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setGameMode } from "../../../redux/gameSlice";

type gameMode = "ai" | "dual" | "solo";
type mode = {
    label: string;
    className: string;
    next: gameMode;
    icon: any;
}
function AppHeader() {

    const gameSettings = useSelector((state: any) => state.game)
    const [gMode, setGMode] = useState<gameMode>(gameSettings.gamemode as gameMode)
    const dispatch = useDispatch();

    const modes = [
        {
            label: "AI Mode",
            className: styles.aiBtn,
            next: "dual",
            icon: <Astroid />
        },
        {
            label: "Dual Mode",
            className: "",
            next: "solo",
            icon: <HandFist />
        },
        {
            label: "Solo Mode",
            className: "",
            next: "ai",
            icon: <UserRound />
        },
    ]

    const ModeBtn = () => {
        const handleModeChange = () => {
            setGMode(gMode === "ai" ? "dual" : gMode === "dual" ? "solo" : "ai");
            dispatch(setGameMode(gMode));

        };

        const currentMode = modes.find((mode) => mode.next === gMode) || modes[0];
        return (
            <div
                onClick={handleModeChange}
                className={`${styles.btn} ${baseStyle.glassCard} ${currentMode.className}`}
            >
                {currentMode.icon}
                {currentMode.label}
            </div>
        );
    };

    return (
        <div className={`${baseStyle.headerContainer} ${LayoutStyle.headerContainer}`}>
            <div className={styles.headerLeading}>
                <img className={styles.logo} src={logo} alt="" />
                <VerticalDivider />
                <CaseCard />
            </div>

            <RoundsCard />

            <div className={styles.headerTrailing}>
                <ModeBtn />

                <div className={`${styles.btn} ${baseStyle.glassCard}`}>
                    <Share2 /> Share
                </div>

                <div className={`${styles.btn} ${baseStyle.glassCard}`}>
                    <MoonStar />
                </div>

                <div className={`${styles.btn} ${baseStyle.glassCard}`}>
                    <Settings />
                </div>
            </div>
        </div>
    );
}

export default AppHeader;