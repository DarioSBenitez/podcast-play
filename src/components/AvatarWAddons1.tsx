import { FunctionComponent } from "react";
import styles from "./AvatarWAddons1.module.css";

export type AvatarWAddons1Type = {
  className?: string;
};

const AvatarWAddons1: FunctionComponent<AvatarWAddons1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.avatarWAddons, className].join(" ")}>
      <img
        className={styles.avatarIcon}
        loading="lazy"
        alt=""
        src="/avatar@2x.png"
      />
      <div className={styles.status}>
        <div className={styles.dot} />
      </div>
    </div>
  );
};

export default AvatarWAddons1;
