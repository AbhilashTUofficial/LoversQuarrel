import "../style.css";

type stats = {
    id: number,
    image: any,
    title: string,
    value: number
}

function LiveStat({ stats }: { stats: stats }) {
    return (
        <div className="card live-stats-card">
            <div className="subtitle">{stats.title}</div>
            <div>
                <img className="live-stats-image" src={stats.image} alt="" />
                <div className="progress-value">{stats.value}%</div>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${stats.value}%` }}></div>
            </div>
        </div>
    )
}

export default LiveStat