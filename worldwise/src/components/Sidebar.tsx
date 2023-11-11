import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar(): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>

      <p>List of cities come here</p>
      <Footer></Footer>
    </div>
  );
}

function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
}

export default Sidebar;
