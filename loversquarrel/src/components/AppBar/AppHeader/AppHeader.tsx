import styles from "./style.module.css";
import baseStyle from "../../../base.module.css";
import LayoutStyle from "../../../layout.module.css";
import logo from "../../../assets/logo.png";
import VerticalDivider from "../../Divider/VerticalDivider";
import CaseCard from "../CaseCard/CaseCard";
import RoundsCard from "../RoundsCard/RoundsCard";
import { Astroid, HandFist, MoonStar, Settings, Share2, UserRound } from "lucide-react";
import { useState } from "react";
import { setGameMode } from "../../../redux/gameSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import type { GameMode } from "../../../types";
import type { ModeConfig } from "./types";

function AppHeader() {
  const gameSettings = useAppSelector((state) => state.game);
  const [gMode, setGMode] = useState<GameMode>(gameSettings.gamemode);
  const dispatch = useAppDispatch();

  const modes: ModeConfig[] = [
    {
      label: "AI Mode",
      className: styles.aiBtn,
      next: "dual",
      icon: <Astroid />,
    },
    {
      label: "Dual Mode",
      className: "",
      next: "solo",
      icon: <HandFist />,
    },
    {
      label: "Solo Mode",
      className: "",
      next: "ai",
      icon: <UserRound />,
    },
  ];

  const ModeBtn = () => {
    const handleModeChange = () => {
      const nextMode: GameMode = gMode === "ai" ? "dual" : gMode === "dual" ? "solo" : "ai";
      setGMode(nextMode);
      dispatch(setGameMode(nextMode));
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
    <div className={LayoutStyle.headerContainer}>
      <div className={styles.headerLeading}>
        <img className={styles.logo} src={logo} alt="logo" />
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