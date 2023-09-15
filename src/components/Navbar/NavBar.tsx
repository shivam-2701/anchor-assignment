import React from "react";
import styles from "./styles.module.scss";
import icon from "./icon.png";
import Button from "../ui/Button";
type Props = {
  onClick?: () => void;
};

const NavBar = ({ onClick }: Props) => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.title} ${styles.innerContainer}`}>
        <img src={icon} alt="icon" />
        {/* TODO: Add Link */}
        <div className={styles.titleText}>anchors</div>
        <div className={styles.beta_tag}>Beta</div>
      </div>
      <div className={`${styles.innerContainer}`}>
        {onClick && (
          <Button type="outline" onClick={onClick}>
            Request Callback
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
