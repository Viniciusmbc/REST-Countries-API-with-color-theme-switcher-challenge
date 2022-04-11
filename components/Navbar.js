import styles from "../styles/Home.module.css";
import { useContext, useReducer } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSelector from "./ThemeSelector";

export function NavBar() {
  const { changeColor, color } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <h2>Where in the world? </h2>
      <ThemeSelector />
    </nav>
  );
}
