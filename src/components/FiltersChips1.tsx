import { FunctionComponent } from "react";
import FrameComponent10 from "./FrameComponent10";
import styles from "./FiltersChips1.module.css";

export type FiltersChips1Type = {
  className?: string;
};

const FiltersChips1: FunctionComponent<FiltersChips1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.filtersChips, className].join(" ")}>
      <button className={styles.homeWrapper}>
        <a className={styles.home}>Home</a>
      </button>
      <FrameComponent10 />
      <FrameComponent10 />
      <FrameComponent10 />
      <FrameComponent10 />
      <FrameComponent10 />
    </div>
  );
};

export default FiltersChips1;
