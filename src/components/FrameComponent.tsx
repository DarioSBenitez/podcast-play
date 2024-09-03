import FiltersChips from "./FiltersChips";
import AvatarWAddons from "./AvatarWAddons";
import RectangleIcon from "./RectangleIcon";
import styles from "./FrameComponent.module.css";




function  FrameComponent () {
  return (
    <div className={styles.div}>
      <div className={styles.filters}>
        <FiltersChips />
      </div>
      <div className={styles.categoryTitleParent}>
        <div className={styles.categoryTitle}>
          <div className={styles.categoryAvatar}>
            <AvatarWAddons />
          </div>
          <div className={styles.sufyanAliParent} >
            <div className={styles.sufyanAli}>Sufyan Ali</div>
            <h3 className={styles.listenAgain}>Listen Again</h3>
          </div>
        </div>
        <div className={styles.expandCircleLeftParent}>
          <img
            className={styles.expandCircleLeftIcon}
            loading="lazy"
            alt=""
            src="/expand-circle-left@2x.png"
          />
          <img
            className={styles.filledCircleRightIcon}
            loading="lazy"
            alt=""
            src="/filled-circle-right.svg"
          />
        </div>
      </div>
      
      <div>
        <RectangleIcon/>
        <RectangleIcon/>
        <RectangleIcon/>
        <RectangleIcon/>
        <RectangleIcon/>
        <RectangleIcon/>
        <p>walter</p>
        <div>
       
        
        </div>
        
   
      </div >
    
    </div>
  );
};

export default FrameComponent;
