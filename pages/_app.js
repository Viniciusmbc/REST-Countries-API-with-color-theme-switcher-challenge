import ThemeContext, {
  ThemeProvider,
} from "../components/context/ThemeContext";
import { NavBar } from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
