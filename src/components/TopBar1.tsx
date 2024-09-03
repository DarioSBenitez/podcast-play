import { FunctionComponent } from "react";
import AvatarWAddons1 from "./AvatarWAddons1";
import styles from "./TopBar1.module.css";

export type TopBar1Type = {
  className?: string;
};

const TopBar1: FunctionComponent<TopBar1Type> = ({ className = "" }) => {
  return (
    <header className={[styles.topBar, className].join(" ")}>
      <div className={styles.platformLogoContainer}>
        <div className={styles.menu}>
          <img className={styles.menuIcon} alt="" src="/menu.svg" />
        </div>
        <img
          className={styles.onPlatformLogoDark1Icon}
          loading="lazy"
          alt=""
          src="/on-platform-logo-dark-1.svg"
        />
      </div>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <div className={styles.search}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.search1}>Search...</div>
          </div>
          <div className={styles.userActions}>
            <div className={styles.castContainer}>
              <img
                className={styles.castIcon}
                loading="lazy"
                alt=""
                src="/cast.svg"
              />
            </div>
            <AvatarWAddons1 />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar1;
