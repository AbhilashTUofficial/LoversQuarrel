import React from 'react'
import PlayerHeader from '../PlayerHeader'
import HorizontalDivider from '../../Divider/HorizontalDivider'
import PlayerTraits from '../PlayerTraits'
import ArgumentTags from '../ArgumentTags'

function BoyfriendPanel() {
    const dummyBoyData = { intellect: 70, logic: 80, drama: 50, sarcasm: 60, stubborness: 10, confidence: 30, memory: 90, empathy: 60 }
    const activeTags = ["Logical", "Dramatic", "Sarcasm", "Stubborn"]
    return (
        <div>
            <PlayerHeader isBoyfriend={true} mode="Defensive" />
            <HorizontalDivider />
            <PlayerTraits traits={dummyBoyData} isBoyfriend={true} />
            <ArgumentTags activeTags={activeTags} isBoyfriend={true} />
        </div>
    )
}

export default BoyfriendPanel