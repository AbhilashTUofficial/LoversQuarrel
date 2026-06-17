import { useState } from 'react';
import styles from "../style.module.css";
import { Send } from 'lucide-react';
import type { ArgumentInputProps } from "./types";

function ArgumentInput({ setArgument, isBoyfriend }: ArgumentInputProps) {

    const [typingArgument, setTypingArgument] = useState<string>("");

    const handleInput = () => {
        if (typingArgument.trim().length > 0) {
            setArgument(typingArgument.trim());
        }
        setTypingArgument("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleInput();
        }
    };

    return (
        <div className={`${styles.chatInputContainer} `}>
            <textarea
                value={typingArgument}
                placeholder="Type your message here..."
                className={`${styles.chatInput} ${isBoyfriend && styles.boyfriendInput}`}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTypingArgument(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div
                onClick={handleInput}
                className={`${styles.sendBtn} ${isBoyfriend && styles.sendBtnBoyfriend}`}
            >
                <Send />
            </div>
        </div>
    );
}

export default ArgumentInput;