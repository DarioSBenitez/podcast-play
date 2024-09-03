import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MenuItem1.module.css";

export type MenuItem1Type = {
  className?: string;
  hasText2?: boolean;
  leftIcon?: boolean;
  noText?: boolean;
  text?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const MenuItem1: FunctionComponent<MenuItem1Type> = ({
  className = "",
  hasText2 = false,
  leftIcon = true,
  noText = true,
  text = "Home",
  propBackgroundColor,
}) => {
  const menuItem31Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

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
