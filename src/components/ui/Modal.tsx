import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

const Modal = ({ children, className, onClick }: Props) => {
  return (
    <div className={`${styles.modal} ${className}`} onClick={onClick}>
      <div onClick={(event) => event.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
