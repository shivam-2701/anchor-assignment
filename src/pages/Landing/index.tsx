import React, { useRef } from "react";
import styles from "./styles.module.scss";
import NavBar from "../../components/Navbar/NavBar";
import Button from "../../components/ui/Button";

interface LandingProps {}

const LandingPage: React.FC<LandingProps> = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.infoContainer}>
        <h1>Discover your earning potential</h1>
        <p>
          Turn your Youtube expertise into a lucrative income through resource
          sharing
        </p>
        <form>
          <label>
            <input
              type="text"
              placeholder="enter youtube video link"
              ref={searchInputRef}
            />
          </label>

          <Button type="primary">Check Earning</Button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
