import type React from "react";
import style from "./style.module.css";

export interface CustomModalProps {
  children: React.ReactNode;
}

function CustomModal({ children }: CustomModalProps) {
  return <div className={style.modelCont}>{children}</div>;
}

export default CustomModal;