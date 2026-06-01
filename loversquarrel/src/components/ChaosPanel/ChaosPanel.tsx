import { Info } from 'lucide-react'
import React from 'react'
import './style.css'
import oldIncident from "../../assets/images/chaos_img_1.png";
import screenshotEvidence from "../../assets/images/chaos_img_2.png";
import includeMom from "../../assets/images/chaos_img_3.png";
import leaveOnRead from "../../assets/images/chaos_img_4.png";
import callBestFriend from "../../assets/images/chaos_img_5.png";
import ChaosCard from './ChaosCard';

type chaosCard = {
    id: number,
    image: any,
    title: string
}
function ChaosPanel() {
    const chaosCards: chaosCard[] = [
        {
            id: 1,
            image: oldIncident,
            title: 'Bring Up Old Incident'
        },
        {
            id: 2,
            image: screenshotEvidence,
            title: 'Screenshot Evidence'
        },
        {
            id: 3,
            image: includeMom,
            title: 'Include Mom'
        },
        {
            id: 4,
            image: leaveOnRead,
            title: 'Leave On Read'
        },
        {
            id: 5,
            image: callBestFriend,
            title: 'Call Best Friend'
        },

    ];
    return (
        <div className="chaos-panel">
            <div className="subtitle">CHAOS CARDS
                <Info className={"info-icon"} />
            </div>
            <div className="chaos-cards">
                {
                    chaosCards.map((card: chaosCard) => (
                        <ChaosCard key={card.id} {...card} />
                    ))
                }
                <ChaosCard key={9} {...chaosCards[0]} />
            </div>

        </div>
    )
}



export default ChaosPanel