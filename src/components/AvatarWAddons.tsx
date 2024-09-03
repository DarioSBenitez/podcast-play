import styles from "./AvatarWAddons.module.css";



function AvatarWAddons () {
  return (
    <div className={styles.avatarWAddons}>
      
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

export default AvatarWAddons;
