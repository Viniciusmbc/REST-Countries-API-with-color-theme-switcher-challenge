import styles from '../styles/Home.module.css';
import { useContext, useReducer } from 'react';
import { ThemeContext } from '../components/context/ThemeContext';

export function NavBar() {
  const { changeColor, color } = useContext(ThemeContext);

  return (
    <nav>
      <h2>Where in the world? </h2>
      <button onClick={() => changeColor('pink')}>dark mode</button>
      <p> {color} </p>
    </nav>
  );
}
