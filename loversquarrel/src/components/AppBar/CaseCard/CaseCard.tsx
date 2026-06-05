import styles from "./style.module.css";
import baseStyle from "../../../base.module.css";

import { SquarePen } from "lucide-react";

function CaseCard() {
    return (
        <div className={`${styles.caseCard} ${baseStyle.glassCard}`}>
            <div className={styles.caseNumber}>CASE #432432</div>

            <div className={styles.caseName}>Whay didn't you reply?</div>

            <SquarePen className={styles.editIcon} />
        </div>
    );
}

export default CaseCard;