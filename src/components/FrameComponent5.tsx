import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.homeWrapper, className].join(" ")}>
      <a className={styles.home}>Home</a>
    </div>
  );
};

export default FrameComponent5;
