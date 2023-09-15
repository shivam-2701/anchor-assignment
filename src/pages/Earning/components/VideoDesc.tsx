import React from "react";
import styles from "./videoStyles.module.scss";
import Button from "../../../components/ui/Button";
import { BsEyeFill } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import prize from "./prize.svg";
import { Video } from "../../../models/Video";
import { useAsyncValue } from "react-router-dom";

const VideoDescription: React.FC = () => {
  const data = (useAsyncValue() as any).data.data.videoData as Video;
  console.log(data);
  return (
    <div className={styles.main}>
      <div className={styles.infoVideo}>
        <div className={styles.thumbnailInfo}>
          {data?.isTop && (
            <div className={styles.rankBadge}>
              {/* <img src={prize} alt="prize icon" /> */}
              Top earner video
            </div>
          )}

          <div className={styles.thumbnail}>
            <img src={data.thumbnail} alt="thumbnail" />
          </div>
          <div className={styles.uploadDate}>{data?.uploadOn}</div>
        </div>
        <div className={styles.desc}>
          <h3>{data.title}</h3>
          <span>
            <BsEyeFill className={styles.icon} />
            {data?.view}
          </span>
          <span>
            <AiFillLike className={styles.icon} />
            {data?.like}
          </span>
          <span>
            <AiFillDislike className={styles.icon} />
            {data?.comment}
          </span>
        </div>
      </div>
      <div className={styles.earning}>
        <div>₹ {data?.earnings}</div>
        <Button type="white">Check How?</Button>
      </div>
    </div>
  );
};

export default VideoDescription;
