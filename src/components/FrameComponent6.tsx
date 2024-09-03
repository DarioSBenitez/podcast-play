import { FunctionComponent } from "react";
import FrameComponent7 from "./FrameComponent7";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.controlsContainerWrapper, className].join(" ")}>
      <div className={styles.controlsContainer}>
        <div className={styles.controlElements}>
          <div className={styles.playbackButtons}>
            <div className={styles.skipButtons}>
              <img
                className={styles.skipPreviousIcon}
                loading="lazy"
                alt=""
                src="/skip-previous.svg"
              />
            </div>
            <img
              className={styles.playArrowIcon}
              loading="lazy"
              alt=""
              src="/play-arrow.svg"
            />
            <div className={styles.skipButtons}>
              <img
                className={styles.skipPreviousIcon}
                alt=""
                src="/skip-next.svg"
              />
            </div>
            <div className={styles.skipButtons}>
              <div className={styles.time}>0:10 / 3:41</div>
            </div>
          </div>
        </div>
        <FrameComponent7 />
        <div className={styles.skipButtons}>
          <div className={styles.volumeIcons}>
            <img
              className={styles.repeatIcon}
              loading="lazy"
              alt=""
              src="/repeat.svg"
            />
            <img
              className={styles.repeatIcon}
              loading="lazy"
              alt=""
              src="/volume-up.svg"
            />
            <img
              className={styles.volumeOffIcon}
              alt=""
              src="/volume-off.svg"
            />
            <img
              className={styles.volumeOffIcon}
              alt=""
              src="/volume-down-alt.svg"
            />
            <img
              className={styles.repeatIcon}
              loading="lazy"
              alt=""
              src="/arrow-drop-down.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent6;
