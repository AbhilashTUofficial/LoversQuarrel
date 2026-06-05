import styles from "./style.module.css";

import boyfriend from "../../../assets/boyfriend.png";
import girlfriend from "../../../assets/girlfriend.png";

function PlayerHeader({
    isBoyfriend,
    mode,
}: {
    isBoyfriend: boolean;
    mode: "Defensive" | "Offensive" | "Furious";
}) {
    return isBoyfriend ? (
        <div className={styles.playerHeaderContainer}>
            <img
                src={boyfriend}
                className={styles.avatar}
                alt=""
            />

            <div className={styles.nameTag}>
                <div className={`${styles.name} ${styles.boyName}`}>
                    Boyfriend

                    <div
                        className={`${styles.bulb} ${styles.bulbBoy}`}
                    ></div>
                </div>

                <div
                    className={`${styles.mode} ${styles.modeBoy}`}
                >
                    {mode}
                </div>
            </div>
        </div>
    ) : (
        <div className={styles.playerHeaderContainer}>
            <img
                src={girlfriend}
                className={styles.avatar}
                alt=""
            />

            <div className={styles.nameTag}>
                <div className={`${styles.name} ${styles.girlName}`}>
                    Girlfriend

                    <div
                        className={`${styles.bulb} ${styles.bulbGirl}`}
                    ></div>
                </div>

                <div
                    className={`${styles.mode} ${styles.modeGirl}`}
                >
                    {mode}
                </div>
            </div>
        </div>
    );
}

export default PlayerHeader;