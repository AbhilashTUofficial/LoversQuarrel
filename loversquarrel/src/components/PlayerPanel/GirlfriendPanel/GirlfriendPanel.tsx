import PlayerHeader from '../PlayerHeader/PlayerHeader'
import HorizontalDivider from '../../Divider/HorizontalDivider'
import PlayerTraits from '../PlayerTraits/PlayerTraits'
import ArgumentTags from '../ArgumentTags/ArgumentTags'
import '../style.css';

function GirlfriendPanel() {

    const dummyGirlData = { intellect: 100, logic: 30, drama: 90, sarcasm: 30, stubborness: 100, confidence: 20, memory: 100, empathy: 80 }
    const activeTags = ["Logical", "Dramatic", "Sarcasm", "Stubborn", "Confident"]

    return (
        <div className='player-panel'>
            <PlayerHeader isBoyfriend={false} mode="Furious" />
            <HorizontalDivider />
            <div className='player-panel-content'>
                <PlayerTraits traits={dummyGirlData} isBoyfriend={false} />
                <ArgumentTags activeTags={activeTags} isBoyfriend={false} />
            </div>
        </div>
    )
}

export default GirlfriendPanel