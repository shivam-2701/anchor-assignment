import React, { useRef } from "react";
import styles from "./styles.module.scss";
import NavBar from "../../components/Navbar/NavBar";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

interface LandingProps {}

const LandingPage: React.FC<LandingProps> = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onSubmit = () => {
    const VID_REGEX =
      /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const url: string | undefined = searchInputRef?.current?.value;

    if (!url) {
      return;
    }
    // @ts-ignore
    const videoId = url!.match(VID_REGEX)[1];

    navigate(`/earnings/${videoId}`);
  };

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

          <Button type="primary" onClick={onSubmit}>
            Check Earning
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
