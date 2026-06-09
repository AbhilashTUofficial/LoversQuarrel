import React, { useState } from 'react'
import styles from "../style.module.css";
import { Send } from 'lucide-react';
function ArgumentInput({ setArgument }) {

    const [typingArgument, setTypingArgument] = useState("")
    const handleInput = () => {
        typingArgument.trim().length > 0 &&
            setArgument(typingArgument)
        setTypingArgument("");
    }

    const isBoyfriend = true

    return (
        <div className={`${styles.chatInputContainer} `}>
            <textarea
                value={typingArgument}
                placeholder="Type your message here..."
                className={`${styles.chatInput} ${isBoyfriend && styles.boyfriendInput}`}
                onChange={(e: Event) => setTypingArgument(e.target.value)}
            />
            <div onClick={handleInput} className={`${styles.sendBtn} ${isBoyfriend && styles.sendBtnBoyfriend}`}>
                <Send />
            </div>
        </div>
    )
}

export default ArgumentInput