import { FunctionComponent } from "react";
import styles from "./FrameComponent10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.homeWrapper, className].join(" ")}>
      <a className={styles.home}>Home</a>
    </div>
  );
};

export default FrameComponent10;
