import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  className?: string;
}

const SubTitle = ({ children, className }: Props) => {
  return <div className={`${styles.subtitle} ${className}`}>{children}</div>;
};

export default SubTitle;
