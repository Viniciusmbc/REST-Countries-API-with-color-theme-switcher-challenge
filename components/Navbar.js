import styles from "../styles/Home.module.css";
import { useContext, useReducer } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSelector from "./ThemeSelector";

export default function NavBar() {
  const { changeColor, color } = useContext(ThemeContext);

  // Trocar classes para darkmode
  const { mode } = useContext(ThemeContext);

  return (
    <nav
      className={`${styles.navbar} ${
        mode === "dark" ? styles.dark_mode : styles.light_mode
      }`}
    >
      <div className={styles.navbar_itens}>
        <h2>Where in the world? </h2>
        <ThemeSelector />
      </div>
    </nav>
  );
}
