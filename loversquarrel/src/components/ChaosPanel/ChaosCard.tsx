import styles from "./style.module.css";
import baseStyle from "../../base.module.css";

import { Plus } from "lucide-react";

type card = {
    id: number;
    image: any;
    title: string;
};

export const ChaosCard = (card: card) => {
    return (
        <div className={`${baseStyle.card} ${styles.chaosCard}`}>
            <img
                className={styles.chaosImage}
                src={card.image}
                alt=""
            />

            <div className={baseStyle.subtitle}>
                {card.title}
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