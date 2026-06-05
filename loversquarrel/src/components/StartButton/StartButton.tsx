import styles from "./style.module.css";

function StartButton() {
    return (
        <div className={styles.playBtnContainer}>
            <button className={styles.playButton}>
                <span className={styles.playIcon} />
            </button>
        </div>
    );
}

export default StartButton;