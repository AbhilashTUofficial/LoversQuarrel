import React from 'react'
import style from "./style.module.css"
function CustomModal({ children }) {
    return (
        <div className={style.modelCont}>
            {children}
        </div>
    )
}

export default CustomModal