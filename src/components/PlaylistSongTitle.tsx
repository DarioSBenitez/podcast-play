import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PlaylistSongTitle.module.css";

export type PlaylistSongTitleType = {
  className?: string;
  playlistName?: string;
  artistName?: string;
  songs?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const PlaylistSongTitle: FunctionComponent<PlaylistSongTitleType> = ({
  className = "",
  playlistName,
  propPadding,
  propAlignSelf,
  artistName,
  propMinWidth,
  songs,
  propWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const artistNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const songsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propWidth, propDisplay, propMinWidth1]);

  return (
    <div className={[styles.playlistSongTitle, className].join(" ")}>
      <b className={styles.playlistName}>{playlistName}</b>
      <div className={styles.artistNameParent} style={frameDivStyle}>
        <div className={styles.artistName} style={artistNameStyle}>
          {artistName}
        </div>
        <div className={styles.ellipseWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.songs} style={songsStyle}>
          {songs}
        </div>
      </div>
    </div>
  );
};

export default PlaylistSongTitle;
