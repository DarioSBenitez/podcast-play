import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MenuItem1.module.css";



const MenuItem1: FunctionComponent<MenuItem1Type> = ({
  className = "",
  hasText2 = false,
  leftIcon = true,
  noText = true,
  text = "Home",

}) 
  return (
    <div
      className={[styles.menuItem3, className].join(" ")}
      style={menuItem31Style}
    >
      {leftIcon && (
        <img
          className={styles.iconiconForMenu}
          alt=""
          src="/iconicon-for-menu.svg"
        />
      )}
      {noText && (
        <div className={styles.homeParent}>
          <a className={styles.home}>{text}</a>
          {hasText2 && <div className={styles.subtext}>Subtext</div>}
        </div>
      )}
    </div>
  );
};

export default MenuItem1;
