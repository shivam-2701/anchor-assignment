import React from "react";
import styles from "./videoStyles.module.scss";
import Button from "../../../components/ui/Button";
import { BsEyeFill } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import prize from "./prize.svg";

interface Props {
  data: {
    title: string;
    thumbnail: string;
    uploadDate: Date;
    isTop: boolean;
    likeCount: number;
    viewCount: number;
    commentCount: number;
    earning: number;
  };
}

const VideoDescription: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.main}>
      <div className={styles.infoVideo}>
        <div className={styles.thumbnailInfo}>
          {data.isTop && (
            <div className={styles.rankBadge}>
              {/* <img src={prize} alt="prize icon" /> */}
              Top earner video
            </div>
          )}

          <div className={styles.thumbnail}>
            <img src={data.thumbnail} alt="thumbnail" />
          </div>
          <div className={styles.uploadDate}>
            {data.uploadDate.toISOString()}
          </div>
        </div>
        <div className={styles.desc}>
          <h3>{data.title}</h3>
          <span>
            <BsEyeFill className={styles.icon} />
            {data.viewCount}
          </span>
          <span>
            <AiFillLike className={styles.icon} />
            {data.viewCount}
          </span>
          <span>
            <AiFillDislike className={styles.icon} />
            {data.viewCount}
          </span>
        </div>
      </div>
      <div className={styles.earning}>
        <div>₹ {data.earning}</div>
        <Button type="white">Check How?</Button>
      </div>
    </div>
  );
};

export default VideoDescription;
