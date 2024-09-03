import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
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
      <div className={styles.infoDetails}>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsContent}>
            <b className={styles.listenAgain}>Can't Stop the Feeling!</b>
            <div className={styles.artistTravel}>
              <div className={styles.mufambiThe}>Calvin Harris</div>
              <div className={styles.travelViews}>
                <div className={styles.travelViewsChild} />
              </div>
              <div className={styles.kViews}>37K views</div>
              <div className={styles.travelViews}>
                <div className={styles.travelViewsChild} />
              </div>
              <div className={styles.likes}>603 likes</div>
            </div>
          </div>
          <div className={styles.interactionButtons}>
            <div className={styles.interactionIcons}>
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

export default FrameComponent7;
