import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  className?: string;
}

const Modal = ({ children, className }: Props) => {
  return <div className={`${styles.modal} ${className}`}>{children}</div>;
};

export default Modal;
