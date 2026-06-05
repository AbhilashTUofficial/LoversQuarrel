import styles from "./style.module.css";
import baseStyle from "../../../base.module.css";

function RoundsCard() {
    return (
        <div className={`${baseStyle.glassCard} ${styles.roundsCard}`}>
            <div className={styles.roundsNumber}>ROUND 7</div>

            <div className={styles.roundsSubtitle}>
                Heated 🔥
            </div>
        </div>
    );
}

export default RoundsCard;