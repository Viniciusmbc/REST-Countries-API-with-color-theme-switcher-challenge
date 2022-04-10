import Head from "next/head";
import { useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import { ThemeContext } from "../components/context/ThemeContext";
import Link from "next/link";

const defaultEndpoint =
  "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3";

export async function getServerSideProps() {
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
    <section
      className={`${styles.container} ${
        mode === "dark" ? styles.dark_mode : styles.light_mode
      }`}
    >
      {data
        .filter(({ name }) => {
          if (name === "") {
            return data;
          } else if (name.common.toLowerCase().includes(query.toLowerCase())) {
            return data;
          }
        })
        .map(({ flags, name, population, region, capital, cca3 }) => (
          <div key={name.common} className={styles.card}>
            <img
              className={styles.bandeiras}
              src={flags.png}
              alt={`bandeira de ${name}`}
            />
            <Link href={`/countries/${encodeURIComponent(cca3).toLowerCase()}`}>
              <a>
                <h2>{name.common}</h2>
              </a>
            </Link>
            <p>
              <b>Population:</b> {population}
            </p>
            <p>
              <b>Region:</b> {region}
            </p>
            <p>
              <b>Capital:</b> {capital}
            </p>
          </div>
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

      <main>{countries}</main>
    </>
  );
}
