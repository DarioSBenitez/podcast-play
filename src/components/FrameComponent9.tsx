import { FunctionComponent } from "react";
import PlaylistSongTitle1 from "./PlaylistSongTitle1";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  className?: string;
  hasBottomIcon?: boolean;
  centerIcon?: boolean;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
  hasBottomIcon = false,
  centerIcon = false,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-1-4@2x.png" />
        <img className={styles.moreVertIcon} alt="" src="/more-vert.svg" />
      </div>
      <div className={styles.playlistSongTitleWrapper}>
        <PlaylistSongTitle1
          playlistName="Playlist Name"
          artistName="Artist Name"
          songs="68 songs"
        />
      </div>
      {centerIcon && (
        <img className={styles.playCircleIcon} alt="" src="/play-circle.svg" />
      )}
      {hasBottomIcon && (
        <img
          className={styles.playCircleIcon1}
          alt=""
          src="/play-circle1.svg"
        />
      )}
    </div>
  );
};

export default FrameComponent9;
