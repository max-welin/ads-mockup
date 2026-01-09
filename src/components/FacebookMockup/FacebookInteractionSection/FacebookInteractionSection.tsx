import { useState } from "react";
import CommentSvg from "../../shared/svg/CommentSvg";
import LikeSvg from "../../shared/svg/LikeSvg";
import ShareSvg from "../../shared/svg/ShareSvg";
import styles from "./FacebookInteractionSection.module.css";
import facebookMockupStyles from "../FacebookMockup.module.css";
import EmojiAngry from "../../shared/emoji/EmojiAngry";
import EmojiHappy from "../../shared/emoji/EmojiHappy";
import EmojiHeart from "../../shared/emoji/EmojiHeart";
import EmojiLike from "../../shared/emoji/EmojiLike";
import EmojiLove from "../../shared/emoji/EmojiLove";
import EmojiSad from "../../shared/emoji/EmojiSad";
import EmojiSurprised from "../../shared/emoji/EmojiSurprised";

type Reaction =
  | "like"
  | "heart"
  | "love"
  | "surprised"
  | "happy"
  | "sad"
  | "angry";

const ORDER: Reaction[] = [
  "like",
  "heart",
  "love",
  "surprised",
  "happy",
  "sad",
  "angry",
];

const ICONS: Record<Reaction, React.FC> = {
  like: EmojiLike,
  heart: EmojiHeart,
  love: EmojiLove,
  surprised: EmojiSurprised,
  happy: EmojiHappy,
  sad: EmojiSad,
  angry: EmojiAngry,
};

const FacebookInteractionSection = () => {
  const [showReactionSelection, setShowReactionSelection] = useState(false);
  const [selected, setSelected] = useState<Reaction[]>(["like", "heart"]);

  const visible = ORDER.filter((reaction) => selected.includes(reaction)).slice(
    0,
    3
  );

  const toggle = (reaction: Reaction) => {
    setSelected((prev) =>
      prev.includes(reaction)
        ? prev.filter((r) => r !== reaction)
        : [...prev, reaction]
    );
  };

  return (
    <div className={styles.interactionsContainer}>
      <div className={styles.interactionsTop}>
        <div
          className={styles.reactionsContainer}
          onMouseEnter={() => setShowReactionSelection(true)}
          onMouseLeave={() => setShowReactionSelection(false)}
        >
          <div className={styles.emojiContainer}>
            {visible.map((reaction, index) => {
              const Icon = ICONS[reaction];
              return <Icon key={index} />;
            })}
          </div>
          {selected.length >= 1 ? (
            <p>136</p>
          ) : (
            <p className={facebookMockupStyles.addReaction}>+ Add reaction</p>
          )}
          {showReactionSelection && (
            <div
              className={styles.reactionSelectionWrapper}
              onMouseEnter={() => setShowReactionSelection(true)}
              onMouseLeave={() => setShowReactionSelection(false)}
            >
              <div className={styles.reactionSelection}>
                {ORDER.map((reaction) => {
                  const isSelected = selected.includes(reaction);
                  const disableButton = selected.length >= 3 && !isSelected;
                  const Icon = ICONS[reaction];
                  return (
                    <button
                      key={reaction}
                      disabled={disableButton}
                      onClick={() => toggle(reaction)}
                      className={styles.reactionButton}
                      aria-pressed={selected.includes(reaction)}
                      style={isSelected ? { backgroundColor: "#80ff0025" } : {}}
                      // style={
                      //   isSelected ? { border: "2px solid #80ff0098" } : {}
                      // }
                    >
                      <Icon />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
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
