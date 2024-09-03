import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PlaylistSongTitle1.module.css";

export type PlaylistSongTitle1Type = {
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

const PlaylistSongTitle1: FunctionComponent<PlaylistSongTitle1Type> = ({
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
  const itemDetailsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const artistName1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const songs1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propWidth, propDisplay, propMinWidth1]);

  return (
    <div className={[styles.playlistSongTitle, className].join(" ")}>
      <b className={styles.playlistName}>{playlistName}</b>
      <div className={styles.itemDetails} style={itemDetailsStyle}>
        <div className={styles.artistName} style={artistName1Style}>
          {artistName}
        </div>
        <div className={styles.itemDetailsInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.songs} style={songs1Style}>
          {songs}
        </div>
      </div>
    </div>
  );
};

export default PlaylistSongTitle1;
