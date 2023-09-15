import React from "react";
import styles from "./styles.module.scss";
import { Video } from "../../../../models/Video";

type Props = {
  data: Video & { rank: number };
};

const TableRow = ({ data }: Props) => {
  return (
    <tr className={styles.table__body__row}>
      <td className={styles.table__body__row__data}>{data.rank}</td>
      <td className={styles.table__body__row__data}>{data.title}</td>
      <td className={styles.table__body__row__image}>
        <img src={data.thumbnail} alt="thumbnail" />
      </td>
      <td className={styles.table__body__row__data}>{data.view}</td>
      <td className={styles.table__body__row__data}>{data.like}</td>
      <td className={styles.table__body__row__data}>{data.comment}</td>
      <td className={styles.table__body__row__data}>{data.uploadOn}</td>
      <td className={styles.table__body__row__data}>{data.earnings}</td>
    </tr>
  );
};

export default TableRow;
