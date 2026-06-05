import styles from "./style.module.css";

function HorizontalDivider() {
    return (
        <div
            className={`${styles.horizontalDivider} ${styles.divider}`}
        ></div>
    );
}

export default HorizontalDivider;