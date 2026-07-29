import baseStyle from "../../../base.module.css";

import PlayerHeader from "../PlayerHeader/PlayerHeader";
import HorizontalDivider from "../../Divider/HorizontalDivider";
import PlayerTraits from "../PlayerTraits/PlayerTraits";
import ArgumentTags from "../ArgumentTags/ArgumentTags";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addPlayerTag, removePlayerTag } from "../../../redux/gameSlice";

function GirlfriendPanel() {
    const dispatch = useAppDispatch();
    const gameSettings = useAppSelector((state) => state.game);

    const handleAddTag = (tag: string) => {
        dispatch(addPlayerTag({ userType: "girlfriend", tag }));
    };

    const handleRemoveTag = (tag: string) => {
        dispatch(removePlayerTag({ userType: "girlfriend", tag }));
    };

    return (
        <div className={baseStyle.playerPanel}>
            <PlayerHeader isBoyfriend={false} mode="Furious" />

            <HorizontalDivider />

            <div className={baseStyle.playerPanelContent}>
                <PlayerTraits
                    isBoyfriend={false}
                    gameMode={gameSettings.gamemode}
                />

                <ArgumentTags
                    isBoyfriend={false}
                    onAddTag={handleAddTag}
                    onRemoveTag={handleRemoveTag}
                />
            </div>
        </div>
    );
}

export default GirlfriendPanel;