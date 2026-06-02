import { Info } from 'lucide-react'
import React from 'react'
import './style.css'

type Props = {
    traits: traits,
    isBoyfriend: boolean
}

type traits = {
    intellect: number,
    logic: number,
    drama: number,
    sarcasm: number,
    stubborness: number,
    confidence: number,
    memory: number,
    empathy: number
}
function PlayerTraits(props: Props) {

    const traits = [
        { name: "🧠 Intellect", value: props.traits.intellect },
        { name: "⚖️ Logic", value: props.traits.logic },
        { name: "🎭 Drama", value: props.traits.drama },
        { name: "😎 Sarcasm", value: props.traits.sarcasm },
        { name: "🛡️ Stubborness", value: props.traits.stubborness },
        { name: "💪 Confidence", value: props.traits.confidence },
        { name: "🗒️ Memory", value: props.traits.memory },
        { name: "💔 Empathy", value: props.traits.empathy },
    ]

    return (
        <div className="player-traits">
            <div className="subtitle">TRAITS
                <Info className={"info-icon"} />
            </div>
            <div className="traits" >
                {
                    traits.map((trait, index) => (
                        <div key={index} className="trait">
                            <div className="trait-name">{trait.name}</div>
                            <div className="trait-progress-bar">
                                <div className="progress-container">
                                    <div className={`progress ${props.isBoyfriend ? "progress-boy" : "progress-girl"}`} style={{ width: `${trait.value}%` }} />
                                    <div className="thumb" />
                                </div>
                            </div>
                            <div className="trait-value">{trait.value}</div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default PlayerTraits