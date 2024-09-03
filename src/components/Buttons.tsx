import { FunctionComponent } from "react";
import styles from "./Buttons.module.css";

export type ButtonsType = {
  className?: string;
  hasText?: boolean;
  leftIcon?: boolean;
};

const Buttons: FunctionComponent<ButtonsType> = ({
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

export default Buttons;
