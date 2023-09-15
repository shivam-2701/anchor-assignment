import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <tr className={styles.table__head}>
      <td className={styles.table__head__data}>Rank</td>
      <td className={styles.table__head__data}>Title</td>
      <td className={styles.table__head__data}>Thumbnail</td>
      <td className={styles.table__head__data}>Views</td>
      <td className={styles.table__head__data}>Likes</td>
      <td className={styles.table__head__data}>Comments</td>
      <td className={styles.table__head__data}>Uploaded on</td>
      <td className={styles.table__head__data}>*Estimated Earning</td>
    </tr>
  );
};

export default TableHeader;
