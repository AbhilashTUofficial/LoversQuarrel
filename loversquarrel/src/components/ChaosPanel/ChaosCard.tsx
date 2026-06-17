import styles from "./style.module.css";
import baseStyle from "../../base.module.css";

import { Plus } from "lucide-react";
import type { ChaosCardProps } from "./types";

export const ChaosCard = ({ id: _id, image, title, reduxKey, isActivated, onToggle }: ChaosCardProps) => {
    return (
        <div
            className={`${baseStyle.card} ${styles.chaosCard} ${isActivated ? styles.chaosCardActivated : ""}`}
            onClick={() => onToggle(reduxKey)}
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