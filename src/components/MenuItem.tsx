import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MenuItem.module.css";
//import { FunctionComponent, useMemo, type CSSProperties } from "react";
//import styles from "./MenuItem.module.css";





const MenuItem: FunctionComponent<MenuItemType> = ({
  className = "",
  hasText2 = false,
  leftIcon = true,
  noText = true,
  text = "Home",
  propBackgroundColor,
}) => {
  const menuItem3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);
const MenuItem = ({ label, onClick }) => {  
  return (  

        <button
          className="p-2 hover:bg-gray-200 cursor-pointer"   
          onClick={onClick}  
        >{label}
        </button>


  );  
};  

  return (
    <div
      className={[styles.menuItem3, className].join(" ")}
      style={menuItem3Style}
    >
      {leftIcon && (
        <img
          className={styles.iconiconForMenu}
          alt=""
          src="/iconicon-for-menu.svg"
        />
      )}
      {noText && (
        <div className={styles.homeParent}>
          <a className={styles.home}>{text}</a>
          {hasText2 && <div className={styles.subtext}>Subtext</div>}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
export default MenuItem
