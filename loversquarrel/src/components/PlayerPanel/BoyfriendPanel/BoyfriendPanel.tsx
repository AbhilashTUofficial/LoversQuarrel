import baseStyle from "../../../base.module.css";

import PlayerHeader from "../PlayerHeader/PlayerHeader";
import HorizontalDivider from "../../Divider/HorizontalDivider";
import PlayerTraits from "../PlayerTraits/PlayerTraits";
import ArgumentTags from "../ArgumentTags/ArgumentTags";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


type boyfriendTraits = {
    intellect: number;
    logic: number;
    drama: number;
    sarcasm: number;
    stubborness: number;
    confidence: number;
    memory: number;
    empathy: number;
}

function BoyfriendPanel() {

    const gameSettings = useSelector((state: any) => state.game)
    const dispatch = useDispatch();

    const [boyfriendTraits, setBoyfriendTraits] = useState<boyfriendTraits>(gameSettings.game.boyfriendTraits);

    const activeTags = ["Logical", "Dramatic", "Sarcasm", "Stubborn"];

    return (
        <div className={baseStyle.playerPanel}>
            <PlayerHeader isBoyfriend={true} mode="Defensive" />

            <HorizontalDivider />

            <div className={baseStyle.playerPanelContent}>
                <PlayerTraits
                    traits={boyfriendTraits}
                    isBoyfriend={true}
                    gameMode={gameSettings.gamemode}
                />

                <ArgumentTags
                    activeTags={activeTags}
                    isBoyfriend={true}
                />
            </div>
        </div>
    );
}

export default BoyfriendPanel;