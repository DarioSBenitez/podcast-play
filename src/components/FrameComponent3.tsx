import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  rectangle2?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  rectangle2,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src={rectangle2} />
        <img className={styles.moreVertIcon} alt="" src="/more-vert.svg" />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.listenAgainParent}>
          <b className={styles.listenAgain}>Listen Again</b>
          <div className={styles.listenAgainGroup}>
            <div className={styles.listenAgain1}>Listen Again</div>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.listenAgain1}>Listen Again</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
