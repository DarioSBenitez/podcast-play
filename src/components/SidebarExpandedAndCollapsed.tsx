import { FunctionComponent } from "react";
import MenuItem from "./MenuItem";
import styles from "./SidebarExpandedAndCollapsed.module.css";



function  SidebarExpandedAndCollapsed ({ className = "" }) {
  return (
    <div className={[styles.sidebarExpandedAndCollapsed, className].join(" ")}>
      <div className={styles.sideBarContent}>
        <div className={styles.menuItems}>
          <MenuItem
            hasText2={false}
            leftIcon
            noText
            text="Home"
            propBackgroundColor="#282828"
          />
          <MenuItem
            hasText2={false}
            leftIcon
            noText
            text="Home"
            propBackgroundColor="unset"
          />
          <MenuItem hasText2 leftIcon noText text="Home" />
        </div>
      </div>
    </div>
  );
};

export default SidebarExpandedAndCollapsed;
