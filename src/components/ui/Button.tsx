import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "white" | "outline";
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  type = "primary",
}) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
