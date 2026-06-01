import React from 'react'
import PlayerHeader from '../PlayerHeader'
import HorizontalDivider from '../../Divider/HorizontalDivider'
import PlayerTraits from '../PlayerTraits'
import ArgumentTags from '../ArgumentTags'

function GirlfriendPanel() {

    const dummyGirlData = { intellect: 100, logic: 30, drama: 90, sarcasm: 30, stubborness: 100, confidence: 20, memory: 100, empathy: 80 }
    const activeTags = ["Logical", "Dramatic", "Sarcasm", "Stubborn", "Confident"]

    return (
        <div>
            <PlayerHeader isBoyfriend={false} mode="Furious" />
            <HorizontalDivider />
            <PlayerTraits traits={dummyGirlData} isBoyfriend={false} />
            <ArgumentTags activeTags={activeTags} isBoyfriend={false} />

        </div>
    )
}

export default GirlfriendPanel