import Head from "next/head";
import { useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import { ThemeContext } from "../components/context/ThemeContext";
import Link from "next/link";

const defaultEndpoint = "https://restcountries.com/v3.1/all";

export async function getServerSideProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await fetch(defaultEndpoint).then((respostaDoServer) => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }
    throw new Error("Deu problema");
  });

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  // Search bar
  const [query, setQuery] = useState("");

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
                  cca3.toLowerCase().replace(/ /g, "-")
                )}`}
              >
                <a>{name.common}</a>
              </Link>
            </li>
            <li>
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
