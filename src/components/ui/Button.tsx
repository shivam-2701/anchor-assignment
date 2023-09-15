import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type: "primary" | "white" | "outline";
}

const Button: React.FC<Props> = ({ children, onClick, type }) => {
  return (
    <button type="button" className={`${styles.button} ${styles[type]}`}>
      {children}
    </button>
  );
};

export default Button;
