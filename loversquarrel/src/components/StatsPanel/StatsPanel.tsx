import { Info } from 'lucide-react'
import "./style.css"
import LiveStat from './LiveStats/LiveStat';
import relationshipIcon from "../../assets/images/stats_img_01.png";
import dramaIcon from "../../assets/images/stats_img_02.png";
import logicIcon from "../../assets/images/stats_img_03.png";
import toxicityIcon from "../../assets/images/stats_img_04.png";

function StatsPanel() {
    const chaosCards = [{
        id: 1,
        image: relationshipIcon,
        title: "Relationship",
        value: 72
    },
    {
        id: 2,
        image: dramaIcon,
        title: "Drama",
        value: 91
    },
    {
        id: 3,
        image: logicIcon,
        title: "Logic",
        value: 22
    },
    {
        id: 4,
        image: toxicityIcon,
        title: "Toxicity",
        value: 84
    }];

    return (
        <div className="live-stats-panel">
            <div className="subtitle">LIVE STATS
                <Info className={"info-icon"} />
            </div>
            <div className="chaos-cards">
                {
                    chaosCards.map((stat) => (
                        <LiveStat key={stat.id} stats={stat} />
                    ))
                }
            </div>

        </div>
    )
}

export default StatsPanel