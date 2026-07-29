import styles from "./style.module.css";
import baseStyle from "../../base.module.css";
import oldIncident from "../../assets/images/chaos_img_01.png";
import screenshotEvidence from "../../assets/images/chaos_img_02.png";
import includeMom from "../../assets/images/chaos_img_03.png";
import leaveOnRead from "../../assets/images/chaos_img_04.png";
import callBestFriend from "../../assets/images/chaos_img_05.png";

import { Plus } from "lucide-react";

export const ChaosCard = ({ id, isActivated, content, title, isUsed }) => {

    const imageMap = {
        "oldIncidentChaosCard": oldIncident,
        "evidenceChaosCard": screenshotEvidence,
        "includeMomChaosCard": includeMom,
        "leaveOnReadChaosCard": leaveOnRead,
        "bestFriendChaosCard": callBestFriend,
    }
    let image = imageMap[id];

    return (
        <div
            className={`${baseStyle.card} ${styles.chaosCard} ${isActivated ? styles.chaosCardActivated : ""}`}
            onClick={() => { }}
            role="button"
            aria-pressed={isActivated}
        >
            <img
                className={styles.chaosImage}
                src={image}
                alt={title}
            />

            <div className={baseStyle.subtitle}>
                {title}
            </div>
        </div>
    );
};

export const AddChaosCard = () => {
    return (
        <div
            className={`${baseStyle.card} ${styles.chaosCard} ${styles.addCard}`}
        >
            <Plus style={{ width: 60, height: 60 }} />
        </div>
    );
};