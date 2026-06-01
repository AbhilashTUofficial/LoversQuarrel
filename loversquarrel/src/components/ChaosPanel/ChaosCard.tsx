import React from 'react'

type card = {
    id: number,
    image: any,
    title: string
}

function ChaosCard(card: card) {
    return (
        <div className="card chaos-card">
            <img className="chaos-image" src={card.image} alt="" />
            <div className="subtitle">{card.title}</div>
        </div>
    )
}

export default ChaosCard