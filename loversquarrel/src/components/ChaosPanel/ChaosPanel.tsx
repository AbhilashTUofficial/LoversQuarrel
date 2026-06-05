import styles from "./style.module.css";
import baseStyle from "../../base.module.css";

import { Info } from "lucide-react";

import oldIncident from "../../assets/images/chaos_img_01.png";
import screenshotEvidence from "../../assets/images/chaos_img_02.png";
import includeMom from "../../assets/images/chaos_img_03.png";
import leaveOnRead from "../../assets/images/chaos_img_04.png";
import callBestFriend from "../../assets/images/chaos_img_05.png";

import { ChaosCard, AddChaosCard } from "./ChaosCard";

type chaosCard = {
    id: number;
    image: any;
    title: string;
};

function ChaosPanel() {
    const chaosCards: chaosCard[] = [
        {
            id: 1,
            image: oldIncident,
            title: "Old Incident",
        },
        {
            id: 2,
            image: screenshotEvidence,
            title: "Evidence",
        },
        {
            id: 3,
            image: includeMom,
            title: "Include Mom",
        },
        {
            id: 4,
            image: leaveOnRead,
            title: "Leave On Read",
        },
        {
            id: 5,
            image: callBestFriend,
            title: "Best Friend",
        },
    ];

    return (
        <div className={styles.chaosPanel}>
            <div className={baseStyle.subtitle}>
                CHAOS CARDS

                <Info className={baseStyle.infoIcon} />
            </div>

            <div className={styles.chaosCards}>
                {chaosCards.map((card: chaosCard) => (
                    <ChaosCard key={card.id} {...card} />
                ))}

                <AddChaosCard />
            </div>
        </div>
    );
}

export default ChaosPanel;