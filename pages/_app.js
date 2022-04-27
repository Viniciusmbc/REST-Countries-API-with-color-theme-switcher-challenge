import ThemeContext, {
  ThemeProvider,
} from "../components/context/ThemeContext";
import NavBar from "../components/Navbar";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
