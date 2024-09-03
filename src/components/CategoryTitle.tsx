import { FunctionComponent } from "react";
import AvatarWAddons from "./AvatarWAddons";
import styles from "./CategoryTitle.module.css";

export type CategoryTitleType = {
  className?: string;
};

const CategoryTitle: FunctionComponent<CategoryTitleType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.categoryTitle, className].join(" ")}>
      <AvatarWAddons />
      <div className={styles.listTitle}>
        <div className={styles.sufyanAliParent}>
          <div className={styles.sufyanAli}>START RADIO FROM A SONG</div>
          <h1 className={styles.listenAgain}>Recommended albums</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryTitle;
