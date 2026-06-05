import styles from "./style.module.css";
import baseStyle from "../../base.module.css";

import { HeartIcon } from "lucide-react";
import HorizontalDivider from "../Divider/HorizontalDivider";
import boyfriend from "../../assets/boyfriend.png";
import girlfriend from "../../assets/girlfriend.png";

type Argument = {
    id: number;
    from: "girlfriend" | "boyfriend" | "system";
    content: string;
    timestamp: Date;
};

function ArgumentArena() {
    const argumentsList: Argument[] = [
        {
            id: 0,
            from: "system",
            content:
                "System: The couple started a conversation about their relationship.",
            timestamp: new Date(),
        },
        {
            id: 1,
            from: "girlfriend",
            content:
                "Hello, I'm girlfriend. I'm glad to see you again today. I hope you have a good day. How about a cup of coffee? I'll be waiting for you there.",
            timestamp: new Date(),
        },
        {
            id: 2,
            from: "boyfriend",
            content:
                "Hi, I'm boyfriend. I'm happy to see you too. I had a great day. Coffee sounds good. I'll be there in 10 minutes.",
            timestamp: new Date(),
        },
        {
            id: 3,
            from: "system",
            content:
                "System: The couple had a great day together. They enjoyed their coffee and talked about their future plans.",
            timestamp: new Date(),
        },
        {
            id: 4,
            from: "girlfriend",
            content:
                "I had a great day too. I'm looking forward to our future together. I love you.",
            timestamp: new Date(),
        },
        {
            id: 5,
            from: "boyfriend",
            content:
                "I love you too. I'm grateful to have you in my life. Let's make more wonderful memories together.",
            timestamp: new Date(),
        },
        {
            id: 6,
            from: "system",
            content:
                "System: The couple's relationship is strong and healthy. They communicate well and support each other.",
            timestamp: new Date(),
        },
    ];

    return (
        <div className={baseStyle.argumentArenaContainer}>
            <div className={styles.relationshipHealthContainer}>
                <HeartIcon className={baseStyle.heartIcon} />
                Relationship Health

                <div className={styles.healthBar}>
                    <div
                        className={styles.healthProgress}
                        style={{ width: "70%" }}
                    />
                </div>

                <div className={baseStyle.healthValue}>70%</div>
            </div>

            <HorizontalDivider />

            <div className={styles.argumentArena}>
                {argumentsList.map((argument) => (
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

                        {/* {
              argument.from === "boyfriend" ? <div className={styles.boyMessageTail}></div> : null
            } */}

                        <div
                            key={argument.id}
                            className={`${styles.argument} ${styles[argument.from]}`}
                        >
                            <div className={baseStyle.argumentContent}>
                                {argument.content}
                            </div>

                            <div className={baseStyle.argumentTimestamp}>
                                {argument.timestamp.toLocaleString()}
                            </div>
                        </div>

                        {/* {
              argument.from === "girlfriend" ? <div className={styles.girlMessageTail}></div> : null
            } */}

                        {argument.from === "girlfriend" ? (
                            <img
                                src={girlfriend}
                                className={styles.avatar}
                                alt="girlfriend"
                            />
                        ) : null}
                    </div>
                ))}
            </div>

            <HorizontalDivider />

            <div className={styles.chatInputContainer}>
                <div className={styles.chatInput}>
                    <input
                        type="text"
                        placeholder="Type your message here..."
                        className={styles.chatInput}
                    />
                </div>

                <button className={baseStyle.sendBtn}>Send</button>
            </div>
        </div>
    );
}

export default ArgumentArena;