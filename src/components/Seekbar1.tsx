import { FunctionComponent } from "react";
import styles from "./Seekbar1.module.css";

export type Seekbar1Type = {
  className?: string;
};

const Seekbar1: FunctionComponent<Seekbar1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.seekbar, className].join(" ")}>
      <div className={styles.barProgressed} />
      <div className={styles.progressCircle} />
    </div>
  );
};

export default Seekbar1;
