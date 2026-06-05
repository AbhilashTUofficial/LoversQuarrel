import styles from "./style.module.css";

function VerticalDivider() {
    return (
        <div
            className={`${styles.verticalDivider} ${styles.divider}`}
        ></div>
    );
}

export default VerticalDivider;