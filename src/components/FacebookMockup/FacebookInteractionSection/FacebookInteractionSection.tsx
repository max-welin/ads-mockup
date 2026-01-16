import CommentSvg from "../../shared/svg/CommentSvg";
import LikeSvg from "../../shared/svg/LikeSvg";
import ShareSvg from "../../shared/svg/ShareSvg";
import styles from "./FacebookInteractionSection.module.css";
import FacebookReactions from "./FacebookReactions";

const comments = Math.floor(Math.random() * 20 + 10);
const shares = Math.floor(Math.random() * 8 + 2);

const FacebookInteractionSection = () => {
  return (
    <div className={styles.interactionsContainer}>
      <div className={styles.interactionsTop}>
        <FacebookReactions />
        <div className={styles.commentsContainer}>
          <p>{comments} comments</p>
          <p>{shares} shares</p>
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
