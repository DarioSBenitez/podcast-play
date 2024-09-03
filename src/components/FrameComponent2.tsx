import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.infoBackgroundParent, className].join(" ")}>
      <img
        className={styles.infoBackgroundIcon}
        loading="lazy"
        alt=""
        src="/rectangle-2-18@2x.png"
      />
      <div className={styles.infoContent}>
        <div className={styles.songDetails}>
          <div className={styles.songTitleContainer}>
            <b className={styles.listenAgain}>Can't Stop the Feeling!</b>
            <div className={styles.artistDetails}>
              <div className={styles.mufambiThe}>Calvin Harris</div>
              <div className={styles.detailsIconsWrapper}>
                <div className={styles.detailsIcons} />
              </div>
              <div className={styles.kViews}>37K views</div>
              <div className={styles.detailsIconsWrapper}>
                <div className={styles.detailsIcons} />
              </div>
              <div className={styles.likes}>603 likes</div>
            </div>
          </div>
          <div className={styles.interactionButtons}>
            <div className={styles.buttonContainer}>
              <img
                className={styles.thumbDownIcon}
                alt=""
                src="/thumb-down.svg"
              />
              <img
                className={styles.thumbDownIcon}
                alt=""
                src="/thumb-up.svg"
              />
              <img
                className={styles.thumbDownIcon}
                alt=""
                src="/more-vert.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
