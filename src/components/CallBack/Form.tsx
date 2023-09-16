import React, { useState } from "react";
import Card from "../ui/Card";
import Title from "../ui/Title";
import Button from "../ui/Button";

import styles from "./styles.module.scss";

type Props = {
  onSubmit: (name: string, phone: string) => void;
};

interface FormData {
  name: string;
  phoneNumber: string;
}

const Form = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
  });

  const clearData = () => {
    setFormData({ name: "", phoneNumber: "" });
  };

  const handleSubmit = () => {
    onSubmit(formData.name, formData.phoneNumber);
    clearData();
  };

  return (
    <Card className={styles.callback}>
      <Title>Request a call back</Title>
      <form action="submit" className={styles.callback__form}>
        <input
          type="text"
          title="name"
          maxLength={10}
          placeholder="Enter name"
          className={styles.callback__input}
          value={formData.name}
          onChange={(event) =>
            setFormData((prev) => {
              return { ...prev, name: event.target.value };
            })
          }
        />
        <input
          type="text"
          title="mobile number"
          placeholder="Enter number"
          className={styles.callback__input}
          value={formData.phoneNumber}
          onChange={(event) => {
            const validation = new RegExp("^[0-9]+$");
            if (
              !validation.test(event.target.value) &&
              event.target.value.length !== 0 &&
              event.target.value.length >= 10
            )
              return;

            setFormData((prev) => {
              return { ...prev, phoneNumber: event.target.value };
            });
          }}
        />
      </form>
      <Button
        type="white"
        className={styles.callback__button}
        onClick={handleSubmit}
      >
        Request a Call Back
      </Button>
    </Card>
  );
};

export default Form;
