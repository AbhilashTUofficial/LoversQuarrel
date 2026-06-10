import { useSelector } from "react-redux"
import baseStyle from "../../base.module.css";
import layoutStyle from "../../layout.module.css";
import style from "./style.module.css"
function Setup() {

    const gameSettings = useSelector((state: any) => state.game)


    return (
        <div className={`${baseStyle.pageContainer} ${layoutStyle.pageContainer}  ${style.setupContainer}`}>
            <div className={`${baseStyle.glassCard} ${style.setupCard}`}>


            </div>
        </div>
    )
}

export default Setup