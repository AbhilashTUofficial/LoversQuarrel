import baseStyle from "../../../base.module.css";

import PlayerHeader from "../PlayerHeader/PlayerHeader";
import HorizontalDivider from "../../Divider/HorizontalDivider";
import PlayerTraits from "../PlayerTraits/PlayerTraits";
import ArgumentTags from "../ArgumentTags/ArgumentTags";

function GirlfriendPanel() {
    const dummyGirlData = {
        intellect: 100,
        logic: 30,
        drama: 90,
        sarcasm: 30,
        stubborness: 100,
        confidence: 20,
        memory: 100,
        empathy: 80,
    };

    const activeTags = [
        "Logical",
        "Dramatic",
        "Sarcasm",
        "Stubborn",
        "Confident",
    ];

    return (
        <div className={baseStyle.playerPanel}>
            <PlayerHeader isBoyfriend={false} mode="Furious" />

            <HorizontalDivider />

            <div className={baseStyle.playerPanelContent}>
                <PlayerTraits
                    traits={dummyGirlData}
                    isBoyfriend={false}
                />

                <ArgumentTags
                    activeTags={activeTags}
                    isBoyfriend={false}
                />
            </div>
        </div>
    );
}

export default GirlfriendPanel;