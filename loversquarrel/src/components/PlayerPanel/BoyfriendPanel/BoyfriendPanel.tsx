import baseStyle from "../../../base.module.css";
import PlayerHeader from "../PlayerHeader/PlayerHeader";
import HorizontalDivider from "../../Divider/HorizontalDivider";
import PlayerTraits from "../PlayerTraits/PlayerTraits";
import ArgumentTags from "../ArgumentTags/ArgumentTags";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addPlayerTag, removePlayerTag } from "../../../redux/gameSlice";
import type { Traits } from "./types";

function BoyfriendPanel() {
    const dispatch = useAppDispatch();
    const gameSettings = useAppSelector((state) => state.game);
    const boyfriendTraits: Traits = gameSettings.game.boyfriendTraits;
    const activeTags: string[] = gameSettings.game.boyfriendTags;

    const handleAddTag = (tag: string) => {
        dispatch(addPlayerTag({ userType: "Boyfriend", tag }));
    };

    const handleRemoveTag = (tag: string) => {
        dispatch(removePlayerTag({ userType: "Boyfriend", tag }));
    };

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
                    onAddTag={handleAddTag}
                    onRemoveTag={handleRemoveTag}
                />
            </div>
        </div>
    );
}

export default BoyfriendPanel;