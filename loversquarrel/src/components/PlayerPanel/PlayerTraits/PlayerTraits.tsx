import styles from "./style.module.css";

import { Info } from "lucide-react";

type gameMode = "solo" | "dual" | "ai";
type Props = {
    traits: traits;
    isBoyfriend: boolean;
    gameMode: gameMode
};

type traits = {
    intellect: number;
    logic: number;
    drama: number;
    sarcasm: number;
    stubborness: number;
    confidence: number;
    memory: number;
    empathy: number;
};

function PlayerTraits(props: Props) {
    const traits = [
        { name: "🧠 Intellect", value: props.traits.intellect },
        { name: "⚖️ Logic", value: props.traits.logic },
        { name: "🎭 Drama", value: props.traits.drama },
        { name: "😎 Sarcasm", value: props.traits.sarcasm },
        { name: "🛡️ Stubborness", value: props.traits.stubborness },
        { name: "💪 Confidence", value: props.traits.confidence },
        { name: "🗒️ Memory", value: props.traits.memory },
        { name: "💔 Empathy", value: props.traits.empathy },
    ];


    return (
        <div className={styles.playerTraits}>
            <div className={styles.subtitle}>
                TRAITS

                <Info className={styles.infoIcon} />
            </div>

            <div className={styles.traits}>
                {traits.map((trait, index) => (
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
                                    className={`${styles.traitProgress} ${props.isBoyfriend
                                        ? styles.progressBoy
                                        : styles.progressGirl
                                        }`}
                                    style={{ width: `${trait.value}%` }}
                                />
                                {
                                    props.gameMode === "ai" && <div className={styles.thumb} />
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