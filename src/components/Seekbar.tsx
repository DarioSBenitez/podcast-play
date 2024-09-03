import { FunctionComponent } from "react";
import styles from "./Seekbar.module.css";

export type SeekbarType = {
  className?: string;
};

const Seekbar: FunctionComponent<SeekbarType> = ({ className = "" }) => {
  return (
    <div className={[styles.seekbar, className].join(" ")}>
      <div className={styles.barProgressed} />
      <div className={styles.progressIndicator} />
    </div>
  );
};

export default Seekbar;
