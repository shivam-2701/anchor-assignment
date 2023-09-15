import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

const Modal = ({ children, className, onClick }: Props) => {
  return (
    <div className={`${styles.modal} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Modal;
