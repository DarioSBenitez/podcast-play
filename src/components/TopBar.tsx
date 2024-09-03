
import AvatarWAddons from "./AvatarWAddons";
import styles from "./TopBar.module.css";



function TopBar () {
  return (
    <div>
    <header className={styles.topBar}>
      <div className={styles.menuParent}>
        <div className={styles.menu}>
          <img className={styles.menuIcon} alt="" src="\menu.svg" />
          
        </div>
        <img
          className={styles.onPlatformLogoDark1Icon}
          loading="lazy"

          alt=""
          src="/on-platform-logo-dark-1.svg"
        />
      </div>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBar}>
          <div className={styles.search}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.search1}>Search...</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.castWrapper}>
              <img
                className={styles.castIcon}
                loading="lazy"
                alt=""
                src="/cast.svg"
              />
            </div>
            <AvatarWAddons />
          </div>
        </div>
      </div>
   </header>
   </div>
  );
};

export default TopBar;
