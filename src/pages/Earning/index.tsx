import React, { useState, Suspense } from "react";
import NavBar from "../../components/Navbar/NavBar";
import styles from "./styles.module.scss";
import VideoDescription from "./components/VideoDesc";
import Modal from "../../components/ui/Modal";
import RequestForCallback from "../../components/CallBack";
import { useLoaderData, Await } from "react-router-dom";
import Table from "./components/table";
import { Video } from "../../models/Video";

type Props = {};

const EarningsDate = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    setShowModal(true);
  };

  const data = useLoaderData() as { promise: any };
  console.log("Data", data);
  // console.log(process.env.REACT_APP_SERVER_URL_DEPLOYEMENT!);
  return (
    <>
      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <RequestForCallback />
        </Modal>
      )}

      <div className={styles.wrapper}>
        <NavBar onClick={onClick} />
        <Suspense fallback={<h1 style={{ color: "white" }}> Loading...</h1>}>
          <Await resolve={data.promise}>
            <main className={styles.main}>
              <VideoDescription />
            </main>
            <Table />
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default EarningsDate;
