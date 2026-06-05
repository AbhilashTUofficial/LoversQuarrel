import styles from "../style.module.css";
import baseStyle from "../../../base.module.css";

type stats = {
    id: number;
    image: any;
    title: string;
    value: number;
};

function LiveStat({ stats }: { stats: stats }) {
    return (
        <div className={`${baseStyle.card} ${styles.liveStatsCard}`}>
            <div className={baseStyle.subtitle}>
                {stats.title}
            </div>

            <div>
                <img
                    className={styles.liveStatsImage}
                    src={stats.image}
                    alt=""
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