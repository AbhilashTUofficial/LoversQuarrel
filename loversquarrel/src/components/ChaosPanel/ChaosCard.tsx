import { Plus } from 'lucide-react'
import React from 'react'

type card = {
    id: number,
    image: any,
    title: string
}

export const ChaosCard = (card: card) => {
    return (
        <div className="card chaos-card">
            <img className="chaos-image" src={card.image} alt="" />
            <div className="subtitle">{card.title}</div>
        </div>
    )
}

export const AddChaosCard = () => {
    return (
        <div className="card chaos-card add-card">
            <Plus style={{ width: 60, height: 60 }} />
        </div>
    )
}


