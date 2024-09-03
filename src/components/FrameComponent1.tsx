import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.playerControlsWrapper, className].join(" ")}>
      <div className={styles.playerControls}>
        <div className={styles.controlPanel}>
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
        <FrameComponent2 />
        <div className={styles.skipButtons}>
          <div className={styles.controlButtons}>
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

export default FrameComponent1;
