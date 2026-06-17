import styles from "./style.module.css";
import baseStyle from "../../../base.module.css";
import { Info } from "lucide-react";
import type { PlayerTraitsProps, TraitRow } from "./types";

function PlayerTraits({ traits, isBoyfriend, gameMode }: PlayerTraitsProps) {
    const traitRows: TraitRow[] = [
        { name: "🧠 Intellect", value: traits.intellect },
        { name: "⚖️ Logic", value: traits.logic },
        { name: "🎭 Drama", value: traits.drama },
        { name: "😎 Sarcasm", value: traits.sarcasm },
        { name: "🛡️ Stubbornness", value: traits.stubbornness },
        { name: "💪 Confidence", value: traits.confidence },
        { name: "🗒️ Memory", value: traits.memory },
        { name: "💔 Empathy", value: traits.empathy },
    ];

    return (
        <div className={styles.playerTraits}>
            <div className={baseStyle.subtitle}>
                TRAITS
                <Info className={baseStyle.infoIcon} />
            </div>

            <div className={styles.traits}>
                {traitRows.map((trait: TraitRow, index: number) => (
                    <div
                        key={index}
                        className={styles.trait}
                    >
                        <div className={styles.traitName}>
                            {trait.name}
                        </div>

                        <div className={styles.traitProgressBar}>
                            <div className={styles.progressContainer}>
                                <div
                                    className={`${styles.traitProgress} ${isBoyfriend
                                        ? styles.progressBoy
                                        : styles.progressGirl
                                        }`}
                                    style={{ width: `${trait.value}%` }}
                                />
                                {
                                    gameMode === "ai" && <div className={styles.thumb} />
                                }

                            </div>
                        </div>

                        <div className={styles.traitValue}>
                            {trait.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayerTraits;