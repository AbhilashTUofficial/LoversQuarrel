import styles from "./style.module.css";
import baseStyle from "../../base.module.css";

import { Info } from "lucide-react";


import { ChaosCard, AddChaosCard } from "./ChaosCard";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toggleChaosCard } from "../../redux/gameSlice";

function ChaosPanel() {
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.game);


    const chaosCards = Object.values(userData.game.currentUserType === "Boyfriend" ? userData.game.boyfriend.chaosCards : userData.game.girlfriend.chaosCards);

    return (
        <div className={styles.chaosPanel}>
            <div className={baseStyle.subtitle}>
                CHAOS CARDS

                <Info className={baseStyle.infoIcon} />
            </div>

            <div className={styles.chaosCards}>
                {chaosCards.map((card) => (
                    <ChaosCard
                        key={card.id}
                        {...card}
                    />
                ))}

                <AddChaosCard />
            </div>
        </div>
    );
}

export default ChaosPanel;