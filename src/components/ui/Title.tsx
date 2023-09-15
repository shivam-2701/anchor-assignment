import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  className?: string;
}

const Title = ({ children, className }: Props) => {
  return <div className={`${styles.title} ${className}`}>{children}</div>;
};

export default Title;
