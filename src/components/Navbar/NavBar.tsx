import React from "react";
import styles from "./styles.module.scss";
import icon from "./icon.png";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.title} ${styles.innerContainer}`}>
        <img src={icon} alt="icon" />
        {/* TODO: Add Link */}
        <div className={styles.titleText}>anchors</div>
        <div className={styles.beta_tag}>Beta</div>
      </div>
      <div className={`${styles.innerContainer}`}></div>
    </nav>
  );
};

export default NavBar;
