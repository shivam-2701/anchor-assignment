import React from "react";
import styles from "./styles.module.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useAsyncValue } from "react-router-dom";
import { Video } from "../../../../models/Video";

type Props = {};

const Table = (props: Props) => {
  const videoList = (useAsyncValue() as any).data.data.videoList as Video[];

  return (
    <div className={styles.table__wrapper}>
      <table className={styles.table}>
        <TableHeader />
        <tbody className={styles.table__body}>
          {videoList.map((video, idx) => (
            <TableRow data={{ ...video, rank: idx + 1 }} key={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
