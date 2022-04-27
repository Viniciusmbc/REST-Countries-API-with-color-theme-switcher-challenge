import { useContext, useReducer, createContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";
import { IoMdMoon } from "react-icons/io";
import styles from "../styles/Home.module.css";

export default function ThemeSelector() {
  const { changeMode, mode } = useContext(ThemeContext);

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  console.log(mode);

  return (
    <div className={styles.theme_selector} onClick={toggleMode}>
      <IoMdMoon />
      <p>Dark Mode</p>
    </div>
  );
}
