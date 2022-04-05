import { useContext, useReducer, createContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";

export default function ThemeSelector() {
  const { changeMode, mode } = useContext(ThemeContext);

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  console.log(mode);

  return (
    <div onClick={toggleMode}>
      <p>MUDAR COR</p>
    </div>
  );
}
