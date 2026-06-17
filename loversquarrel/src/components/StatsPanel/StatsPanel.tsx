import styles from "./style.module.css";
import baseStyle from "../../base.module.css";

import { Info } from "lucide-react";

import LiveStat from "./LiveStats/LiveStat";
import type { StatCard } from "./types";
import { useAppSelector } from "../../redux/store";

import relationshipIcon from "../../assets/images/stats_img_01.png";
import dramaIcon from "../../assets/images/stats_img_02.png";
import logicIcon from "../../assets/images/stats_img_03.png";
import toxicityIcon from "../../assets/images/stats_img_04.png";

function StatsPanel() {
    const gameStats = useAppSelector((state) => state.game.game.stats);

    const stats: StatCard[] = [
        {
            id: 1,
            image: relationshipIcon,
            title: "Relationship",
            value: gameStats.relationshipStat,
        },
        {
            id: 2,
            image: dramaIcon,
            title: "Drama",
            value: gameStats.dramaStat,
        },
        {
            id: 3,
            image: logicIcon,
            title: "Logic",
            value: gameStats.logicStat,
        },
        {
            id: 4,
            image: toxicityIcon,
            title: "Toxicity",
            value: gameStats.toxicityStat,
        },
    ];

    return (
        <div className={styles.liveStatsPanel}>
            <div className={baseStyle.subtitle}>
                LIVE STATS

                <Info className={baseStyle.infoIcon} />
            </div>

            <div className={styles.liveStatsCards}>
                {stats.map((stat: StatCard) => (
                    <LiveStat
                        key={stat.id}
                        stats={stat}
                    />
                ))}
            </div>
        </div>
    );
}

export default StatsPanel;