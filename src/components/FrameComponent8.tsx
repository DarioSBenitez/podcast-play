import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent8.module.css";

export type FrameComponent8Type = {
  className?: string;
  rectangle2?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
  rectangle2,
  propTextDecoration,
}) => {
  const listenAgain3Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

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
            <a className={styles.listenAgain2} style={listenAgain3Style}>
              Listen Again
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
