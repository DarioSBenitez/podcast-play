import { FunctionComponent } from "react";
import MenuItem1 from "./MenuItem1";
import styles from "./SidebarExpandedAndCollapsed1.module.css";

export type SidebarExpandedAndCollapsed1Type = {
  className?: string;
};

const SidebarExpandedAndCollapsed1: FunctionComponent<
  SidebarExpandedAndCollapsed1Type
> = ({ className = "" }) => {
  return (
    <div className={[styles.sidebarExpandedAndCollapsed, className].join(" ")}>
      <div className={styles.sidebarMenu}>
        <div className={styles.menuItemContainer}>
          <MenuItem1
            hasText2={false}
            leftIcon
            noText
            text="Home"
            propBackgroundColor="#282828"
          />
          <MenuItem1
            hasText2={false}
            leftIcon
            noText
            text="Home"
            propBackgroundColor="unset"
          />
          <MenuItem1 hasText2 leftIcon noText text="Home" />
        </div>
      </div>
    </div>
  );
};

export default SidebarExpandedAndCollapsed1;
