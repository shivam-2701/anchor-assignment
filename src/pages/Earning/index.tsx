import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import styles from "./styles.module.scss";
import VideoDescription from "./components/VideoDesc";

type Props = {};

const EarningsDate = (props: Props) => {
  return (
    <div>
      <NavBar />
      <main className={styles.main}>
        <VideoDescription
          data={{
            commentCount: 342432,
            viewCount: 238989,
            likeCount: 233332,
            earning: 89898,
            isTop: true,
            thumbnail:
              "https://s3-alpha-sig.figma.com/img/ff04/2b0d/6dbd4bf7420ba9714115a2a9e0d70ff0?Expires=1695600000&Signature=F7mo5UF7Ym5wFYEyZQnqhRhFz0X-INnhWwSO6xJqImk00fv8u4A55fhaUfPpCKZT9LcP4EnsFNIAcFQulVsc0bTI3OTCxPLoLhHGS8PXhgnvvOD91VaRSg9iuXyOJ8ZcgyjZMMzlhPUYGVFNVjPLBRuh3rACTGZfK~CwZgKc5ro~DeYLsaUV2Co6JlnzGCk0qeXCLemIbxY1J2G2kZwkpyDYCPFxkNH~Xs~tmamRYF5yIlWd0LS4SWa7P~GccnNC3CBsFTI4sAb6NT8LSTkfmXUdTrs5g6MkFyDuq20UXbQIvjSXXb2jtAIZaj6FLyTQ1tiv5tgRwRTNFAf1Wdxj~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: "How become a pro UI/UX Designer",
            uploadDate: new Date(),
          }}
        />
      </main>
    </div>
  );
};

export default EarningsDate;