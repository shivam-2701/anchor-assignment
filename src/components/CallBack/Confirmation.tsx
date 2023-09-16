import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import Button from "../ui/Button";

import SubTitle from "../ui/SubTitle";
import Title from "../ui/Title";
import styles from "./styles.module.scss";
import Card from "../ui/Card";

type Props = {
  onCancel: () => void;
};

const Confirmation = ({ onCancel }: Props) => {
  return (
    <Card className={styles.confirmation}>
      <FaRegCheckCircle className={styles.confirmation__icon} />
      <div className={styles.confirmation__body}>
        <Title className={styles.confirmation__title}>
          Request a Call back
        </Title>
        <div className={styles.confirmation__description}>
          <SubTitle>Our Team will call you shortly in 12-24 hrs</SubTitle>
          <SubTitle>Can't you wait for call?</SubTitle>
        </div>
      </div>
      <Button className={styles.confirmation__button} onClick={onCancel}>
        Check another video
        <AiOutlineArrowRight className={styles.confirmation__button__icon} />
      </Button>
    </Card>
  );
};

export default Confirmation;
