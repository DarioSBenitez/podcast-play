import { FunctionComponent } from "react";
import styles from "./Buttons1.module.css";

export type Buttons1Type = {
  className?: string;
  hasText?: boolean;
  leftIcon?: boolean;
};

const Buttons1: FunctionComponent<Buttons1Type> = ({
  className = "",
  hasText = true,
  leftIcon = false,
}) => {
  return (
    <button className={[styles.buttons, className].join(" ")}>
      <div className={styles.iconiconForMenuParent}>
        {leftIcon && (
          <img
            className={styles.iconiconForMenu}
            alt=""
            src="/iconicon-for-menu1.svg"
          />
        )}
        {hasText && <div className={styles.home}>Play all</div>}
      </div>
    </button>
  );
};

export default Buttons1;
