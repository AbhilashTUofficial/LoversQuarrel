import styles from "../style.module.css";
import baseStyle from "../../../base.module.css";
import type { LiveStatProps } from "./types";

function LiveStat({ stats }: LiveStatProps) {
    return (
        <div className={`${baseStyle.card} ${styles.liveStatsCard}`}>
            <div className={baseStyle.subtitle}>
                {stats.title}
            </div>

            <div>
                <img
                    className={styles.liveStatsImage}
                    src={stats.image}
                    alt={stats.title}
                />

                <div className={styles.progressValue}>
                    {stats.value}%
                </div>
            </div>

            <div className={styles.progressBar}>
                <div
                    className={styles.progress}
                    style={{ width: `${stats.value}%` }}
                ></div>
            </div>
        </div>
    );
}

export default LiveStat;