import Navbar from "../components/Navbar";
import "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
