import { useState } from "react";
import Confirmation from "./Confirmation";
import Form from "./Form";
import axios from "../../config/axios";

type Props = {
  onCancel: () => void;
};

const RequestForCallback = ({ onCancel }: Props) => {
  const [isSend, setIsSend] = useState(false);

  const handleSubmit = (name: string, phone: string) => {
    axios
      .post("/callback", {
        name: name,
        contact: phone,
      })
      .then((res) => {
        setIsSend(true);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return isSend ? (
    <Confirmation onCancel={onCancel} />
  ) : (
    <Form onSubmit={handleSubmit} />
  );
};

export default RequestForCallback;
