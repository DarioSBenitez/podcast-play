import { FunctionComponent } from "react";
import AvatarWAddons1 from "./AvatarWAddons1";
import styles from "./CategoryTitle1.module.css";

export type CategoryTitle1Type = {
  className?: string;
};

const CategoryTitle1: FunctionComponent<CategoryTitle1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.categoryTitle, className].join(" ")}>
      <AvatarWAddons1 />
      <div className={styles.listenContainerWrapper}>
        <div className={styles.listenContainer}>
          <div className={styles.sufyanAli}>START RADIO FROM A SONG</div>
          <h1 className={styles.listenAgain}>Recommended albums</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryTitle1;
