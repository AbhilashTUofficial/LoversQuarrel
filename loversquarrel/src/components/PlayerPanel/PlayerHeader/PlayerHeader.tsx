import boyfriend from '../../../assets/boyfriend.png';
import girlfriend from '../../../assets/girlfriend.png';
import './style.css'

function PlayerHeader({ isBoyfriend, mode }: { isBoyfriend: boolean, mode: "Defensive" | "Offensive" | "Furious" }) {
    return (
        isBoyfriend ?
            <div className="player-header-container">
                <img src={boyfriend} className="avatar" alt="" />

                <div className="name-tag">
                    <div className="name boy-name">Boyfriend
                        <div className="bulb bulb-boy"></div>
                    </div>
                    <div className="mode mode-boy">{mode}</div>
                </div>
            </div> :
            <div className="player-header-container">
                <img src={girlfriend} className="avatar" alt="" />

                <div className="name-tag">
                    <div className="name girl-name">Girlfriend
                        <div className="bulb bulb-girl"></div>
                    </div>
                    <div className="mode mode-girl">{mode}</div>
                </div>
            </div>
    )
}

export default PlayerHeader