import baseStyle from "../../../base.module.css";

import PlayerHeader from "../PlayerHeader/PlayerHeader";
import HorizontalDivider from "../../Divider/HorizontalDivider";
import PlayerTraits from "../PlayerTraits/PlayerTraits";
import ArgumentTags from "../ArgumentTags/ArgumentTags";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addPlayerTag, removePlayerTag } from "../../../redux/gameSlice";
import type { Traits } from "./types";

function GirlfriendPanel() {
    const dispatch = useAppDispatch();
    const gameSettings = useAppSelector((state) => state.game);
    const girlfriendTraits: Traits = gameSettings.game.girlfriendTraits;
    const activeTags: string[] = gameSettings.game.girlfriendTags;

    const handleAddTag = (tag: string) => {
        dispatch(addPlayerTag({ userType: "Girlfriend", tag }));
    };

    const handleRemoveTag = (tag: string) => {
        dispatch(removePlayerTag({ userType: "Girlfriend", tag }));
    };

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
                    onAddTag={handleAddTag}
                    onRemoveTag={handleRemoveTag}
                />
            </div>
        </div>
    );
}

export default GirlfriendPanel;