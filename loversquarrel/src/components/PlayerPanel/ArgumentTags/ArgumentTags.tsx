import styles from "./style.module.css";
import baseStyle from "../../../base.module.css";

import { Info, X } from "lucide-react";
import type { ArgumentTagsProps } from "./types";
import { useSelector } from "react-redux";

function ArgumentTags({ isBoyfriend, onAddTag, onRemoveTag }: ArgumentTagsProps) {
    const handleAddTag = () => {
        const tag = prompt("Enter a new tag:");
        if (tag && tag.trim().length > 0) {
            onAddTag(tag.trim());
        }
    };

    const userData = useSelector((state: any) => state.game);
    const activeTags: string[] = isBoyfriend ? userData.game.boyfriend.tags : userData.game.girlfriend.tags;

    return (
        <div className={styles.activeTagContainer}>
            <div className={baseStyle.subtitle}>
                ACTIVE TAGS

                <Info className={baseStyle.infoIcon} />
            </div>

            <div className={styles.tags}>
                {activeTags.map((tag: string, index: number) => (
                    <div
                        key={index}
                        className={`${styles.activeTag} ${isBoyfriend
                            ? styles.activeTagBoy
                            : styles.activeTagGirl
                            }`}
                    >
                        {tag}

                        <X
                            className={styles.closeIcon}
                            onClick={() => onRemoveTag(tag)}
                        />
                    </div>
                ))}

                <div
                    className={styles.addNewTag}
                    onClick={handleAddTag}>
                    + Add tag
                </div>
            </div>
        </div>
    );
}

export default ArgumentTags;