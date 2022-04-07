import Head from "next/head";
import { useState } from "react";
import { useContext } from "react";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/Navbar";
import { ThemeContext } from "../components/context/ThemeContext";
import Link from "next/link";

export default function Home({ data }) {
  // Search bar
  const [query, setQuery] = useState("");

  // Country Detail
  const [showDetails, setShowDetails] = useState(false);

  // Trocar classes para darkmode
  const { mode } = useContext(ThemeContext);

  // all countries
  const countries = (
    <section>
      {data
        .filter(({ name }) => {
          if (name.common === "") {
            return data;
          } else if (name.common.toLowerCase().includes(query.toLowerCase())) {
            return data;
          }
        })
        .map(({ flags, name, population, region, capital, cca3 }) => (
          <ul>
            <li>
              <Link
                href={`/countries/${encodeURIComponent(
                  name.common.toLowerCase().replace(/ /g, "-")
                )}`}
              >
                <a>{name.common}</a>
              </Link>
            </li>
            <li onClick={() => setShowDetails(!showDetails)}>
              <b>{name.common}</b>
            </li>
            <li>
              <b>Population:</b> {population}
            </li>
            <li>
              <b>Region:</b> {region}
            </li>
            <li>
              <b>Capital:</b> {capital}
            </li>
          </ul>
        ))
        .splice(0, 8)}
    </section>
  );

  return (
    <>
      <input
        placeholder="Enter Post Title"
        onChange={(event) => setQuery(event.target.value)}
      />

      <div
        className={`${mode === "dark" ? styles.dark_mode : styles.light_mode}`}
      >
        {countries}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await fetch("https://restcountries.com/v3.1/all").then(
    (respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error("Deu problema");
    }
  );

  // The value of the `props` key will be
  //  passed to the `Home` component

  return {
    props: {
      data,
    },
  };
}
