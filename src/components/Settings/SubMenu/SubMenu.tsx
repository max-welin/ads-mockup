import styles from "./SubMenu.module.css";

interface SubMenuProps {
  title: string;
}

const SubMenu = ({ title }: SubMenuProps) => {
  return (
    <div className={styles.subMenu}>
      <p>{title}</p>
      <ul>
        <li>
          <button>btn</button>
        </li>
      </ul>
    </div>
  );
};

export default SubMenu;
