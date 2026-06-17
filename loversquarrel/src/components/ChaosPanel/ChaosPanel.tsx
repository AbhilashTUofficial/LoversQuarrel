import styles from "./style.module.css";
import baseStyle from "../../base.module.css";

import { Info } from "lucide-react";

import oldIncident from "../../assets/images/chaos_img_01.png";
import screenshotEvidence from "../../assets/images/chaos_img_02.png";
import includeMom from "../../assets/images/chaos_img_03.png";
import leaveOnRead from "../../assets/images/chaos_img_04.png";
import callBestFriend from "../../assets/images/chaos_img_05.png";

import { ChaosCard, AddChaosCard } from "./ChaosCard";
import type { ChaosCardItem } from "./types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toggleChaosCard } from "../../redux/gameSlice";
import type { ChaosCardKeys } from "../../redux/gameSlice";

function ChaosPanel() {
    const dispatch = useAppDispatch();
    const chaosCardStates = useAppSelector((state) => state.game.game.chaosCards);

    const chaosCards: ChaosCardItem[] = [
        {
            id: 1,
            image: oldIncident,
            title: "Old Incident",
            reduxKey: "oldIncidentChaosCard",
        },
        {
            id: 2,
            image: screenshotEvidence,
            title: "Evidence",
            reduxKey: "evidenceChaosCard",
        },
        {
            id: 3,
            image: includeMom,
            title: "Include Mom",
            reduxKey: "includeMomChaosCard",
        },
        {
            id: 4,
            image: leaveOnRead,
            title: "Leave On Read",
            reduxKey: "leaveOnReadChaosCard",
        },
        {
            id: 5,
            image: callBestFriend,
            title: "Best Friend",
            reduxKey: "bestFriendChaosCard",
        },
    ];

    const handleToggle = (key: ChaosCardKeys) => {
        dispatch(toggleChaosCard(key));
    };

    return (
        <div className={styles.chaosPanel}>
            <div className={baseStyle.subtitle}>
                CHAOS CARDS

                <Info className={baseStyle.infoIcon} />
            </div>

            <div className={styles.chaosCards}>
                {chaosCards.map((card: ChaosCardItem) => (
                    <ChaosCard
                        key={card.id}
                        {...card}
                        isActivated={chaosCardStates[card.reduxKey] === "activated"}
                        onToggle={handleToggle}
                    />
                ))}

                <AddChaosCard />
            </div>
        </div>
    );
}

export default ChaosPanel;