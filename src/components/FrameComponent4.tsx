import { FunctionComponent } from "react";
import PlaylistSongTitle from "./PlaylistSongTitle";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
  hasBottomIcon?: boolean;
  centerIcon?: boolean;
  playlistName4?: string;
  propPadding4?: string;
  propAlignSelf4?: string;
  artistName4?: string;
  propMinWidth4?: string;
  songs4?: string;
  propWidth4?: string;
  propDisplay4?: string;
  propMinWidth15?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  hasBottomIcon = false,
  centerIcon = false,
  playlistName4,
  propPadding4,
  propAlignSelf4,
  artistName4,
  propMinWidth4,
  songs4,
  propWidth4,
  propDisplay4,
  propMinWidth15,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-1-4@2x.png" />
        <img className={styles.moreVertIcon} alt="" src="/more-vert.svg" />
      </div>
      <div className={styles.playlistSongTitleWrapper}>
        <PlaylistSongTitle
          playlistName={playlistName4}
          propPadding={propPadding4}
          propAlignSelf={propAlignSelf4}
          artistName={artistName4}
          propMinWidth={propMinWidth4}
          songs={songs4}
          propWidth={propWidth4}
          propDisplay={propDisplay4}
          propMinWidth1={propMinWidth15}
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

export default FrameComponent4;
