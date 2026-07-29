import styles from "./style.module.css";
import baseStyle from "../../base.module.css";

import { Info } from "lucide-react";


import { ChaosCard, AddChaosCard } from "./ChaosCard";
import { useAppSelector } from "../../redux/store";

function ChaosPanel() {
    const userData = useAppSelector((state) => state.game);


    const chaosCards = Object.values(userData.game.currentUserType === "boyfriend" ? userData.game.boyfriend.chaosCards : userData.game.girlfriend.chaosCards);

    return (
        <div className={styles.chaosPanel}>
            <div className={baseStyle.subtitle}>
                CHAOS CARDS

                <Info className={baseStyle.infoIcon} />
            </div>

            <div className={styles.chaosCards}>
                {chaosCards.map((card, index) => (
                    <ChaosCard
                        key={index}
                        id={card.id}
                        isActivated={card.isActivated}
                        content={card.content}
                        title={card.title}
                        isUsed={card.isUsed}
                    />
                ))}

                <AddChaosCard />
            </div>
        </div>
    );
}

export default ChaosPanel;