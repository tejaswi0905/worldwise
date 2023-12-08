type PropsType = {
  children: any;
  onClick?: any;
  type: any;
};

import styles from "./Button.module.css";

function Button({ children, onClick, type }: PropsType): JSX.Element {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
