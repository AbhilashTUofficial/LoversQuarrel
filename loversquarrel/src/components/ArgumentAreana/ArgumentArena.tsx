import styles from "./style.module.css";

import { HeartIcon } from "lucide-react";
import HorizontalDivider from "../Divider/HorizontalDivider";
import boyfriend from "../../assets/boyfriend.png";
import girlfriend from "../../assets/girlfriend.png";
import ArgumentInput from "./ArgumentInput/ArgumentInput";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addArgument } from "../../redux/gameSlice";
import type { Argument } from "./types";

function ArgumentArena() {
    const dispatch = useAppDispatch();
    const argumentStack = useAppSelector((state) => state.game.game.argumentStack);
    const relationshipHealth = useAppSelector((state) => state.game.game.stats.relationshipHealth);
    const currentUserType = useAppSelector((state) => state.game.game.currentUserType);

    const insertArgument = (newArgument: string) => {
        dispatch(addArgument({
            from: currentUserType,
            content: newArgument,
        }));
    };

    return (
        <div className={styles.argumentArenaContainer}>
            <div className={styles.relationshipHealthContainer}>
                <HeartIcon className={styles.heartIcon} />
                Relationship Health

                <div className={styles.healthBar}>
                    <div
                        className={styles.healthProgress}
                        style={{ width: `${relationshipHealth}%` }}
                    />
                </div>

                <div className={styles.healthValue}>{relationshipHealth}%</div>
                <HorizontalDivider />
            </div>


            <div className={styles.argumentArena}>
                {(argumentStack as Argument[]).map((argument) => (
                    <div
                        key={argument.id}
                        className={`${styles.argumentContainer} ${styles[`${argument.from}Argument`]
                            }`}
                    >
                        {argument.from === "boyfriend" ? (
                            <img
                                src={boyfriend}
                                className={styles.avatar}
                                alt="boyfriend"
                            />
                        ) : null}

                        <div
                            key={argument.id}
                            className={`${styles.argument} ${styles[argument.from]}`}
                        >
                            <div className={styles.argumentContent}>
                                {argument.content}
                            </div>

                            <div className={styles.argumentTimestamp}>
                                {new Date(argument.timestamp).toLocaleString()}
                            </div>
                        </div>

                        {argument.from === "girlfriend" ? (
                            <img
                                src={girlfriend}
                                className={styles.avatar}
                                alt="girlfriend"
                            />
                        ) : null}
                    </div>
                ))}
                <HorizontalDivider />

            </div>

            <ArgumentInput
                setArgument={insertArgument}
                isBoyfriend={currentUserType === "boyfriend"}
            />
        </div>
    );
}

export default ArgumentArena;