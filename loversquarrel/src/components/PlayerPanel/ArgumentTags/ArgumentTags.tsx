import styles from "./style.module.css";
import baseStyle from "../../../base.module.css";

import { Info, X } from "lucide-react";

type Props = {
    isBoyfriend: boolean;
    activeTags: String[];
};

function ArgumentTags(props: Props) {
    return (
        <div className={styles.activeTagContainer}>
            <div className={baseStyle.subtitle}>
                ACTIVE TAGS

                <Info className={baseStyle.infoIcon} />
            </div>

            <div className={styles.tags}>
                {props.activeTags.map((tag, index) => (
                    <div
                        key={index}
                        className={`${styles.activeTag} ${props.isBoyfriend
                            ? styles.activeTagBoy
                            : styles.activeTagGirl
                            }`}
                    >
                        {tag}

                        <X className={styles.closeIcon} />
                    </div>
                ))}

                <div className={styles.addNewTag}>+ Add Tag</div>
            </div>
        </div>
    );
}

export default ArgumentTags;