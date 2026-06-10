import baseStyle from "../../../base.module.css";

import PlayerHeader from "../PlayerHeader/PlayerHeader";
import HorizontalDivider from "../../Divider/HorizontalDivider";
import PlayerTraits from "../PlayerTraits/PlayerTraits";
import ArgumentTags from "../ArgumentTags/ArgumentTags";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

type girlfriendTraits = {
    intellect: number;
    logic: number;
    drama: number;
    sarcasm: number;
    stubborness: number;
    confidence: number;
    memory: number;
    empathy: number;
};

function GirlfriendPanel() {
    const gameSettings = useSelector((state: any) => state.game)
    const dispatch = useDispatch();

    const [girlfriendTraits, setGirlfriendTraits] = useState<girlfriendTraits>(gameSettings.game.girlfriendTraits);


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
                    traits={girlfriendTraits}
                    isBoyfriend={false}
                    gameMode={gameSettings.gamemode}
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