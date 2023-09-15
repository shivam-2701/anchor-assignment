import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
