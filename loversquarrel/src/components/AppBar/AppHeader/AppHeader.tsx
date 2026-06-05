import styles from "./style.module.css";
import baseStyle from "../../../base.module.css";
import LayoutStyle from "../../../layout.module.css";
import logo from "../../../assets/logo.png";
import VerticalDivider from "../../Divider/VerticalDivider";
import CaseCard from "../CaseCard/CaseCard";
import RoundsCard from "../RoundsCard/RoundsCard";
import { Astroid, MoonStar, Settings, Share2 } from "lucide-react";

function AppHeader() {
    return (
        <div className={`${baseStyle.headerContainer} ${LayoutStyle.headerContainer}`}>
            <div className={styles.headerLeading}>
                <img className={styles.logo} src={logo} alt="" />
                <VerticalDivider />
                <CaseCard />
            </div>

            <RoundsCard />

            <div className={styles.headerTrailing}>
                <div className={`${styles.btn} ${baseStyle.glassCard} ${baseStyle.modeBtn}`}>
                    <Astroid /> AI Mode
                </div>

                <div className={`${styles.btn} ${baseStyle.glassCard} ${baseStyle.shareBtn}`}>
                    <Share2 /> Share
                </div>

                <div className={`${styles.btn} ${baseStyle.glassCard} ${baseStyle.themeBtn}`}>
                    <MoonStar />
                </div>

                <div className={`${styles.btn} ${baseStyle.glassCard} ${baseStyle.settingsBtn}`}>
                    <Settings />
                </div>
            </div>
        </div>
    );
}

export default AppHeader;