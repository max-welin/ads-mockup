import CommentSvg from "../../shared/svg/CommentSvg";
import LikeSvg from "../../shared/svg/LikeSvg";
import ShareSvg from "../../shared/svg/ShareSvg";
import styles from "./FacebookInteractionSection.module.css";
import FacebookReactions from "./FacebookReactions";

const FacebookInteractionSection = () => {
  return (
    <div className={styles.interactionsContainer}>
      <div className={styles.interactionsTop}>
        <FacebookReactions />
        <div className={styles.commentsContainer}>
          <p>28 comments</p>
          <p>2 shares</p>
        </div>
      </div>
      <div className={styles.interactionsBottom}>
        <div>
          <LikeSvg />
          <p>Like</p>
        </div>
        <div>
          <CommentSvg />
          <p>Comment</p>
        </div>
        <div>
          <ShareSvg />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default FacebookInteractionSection;
