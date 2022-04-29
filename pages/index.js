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

  const [regionSelected, setRegionSelected] = useState("");

  const filterByRegion = (
    <form className={styles.filter_by_region}>
      <label className={styles.label} for="first">
        <select onChange={(event) => setRegionSelected(event.target.value)}>
          <option value="" disabled selected>
            Filter by Region
          </option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    </form>
  );

  // all countries
  const countries = (
    <>
      {data
        .filter(({ name }) => {
          if (name === "") {
            return data;
          } else if (name.common.toLowerCase().includes(query.toLowerCase())) {
            return data;
          }
        })
        .map(({ flags, name, population, region, capital, cca3 }) => (
          <div
            key={name.common}
            className={`${styles.cards} ${
              mode === "dark" ? styles.dark_mode : styles.light_mode
            }`}
          >
            <img
              className={styles.card_flags}
              src={flags.png}
              alt={`bandeira de ${name}`}
            />
            <div
              className={`${styles.card_info} ${
                mode === "dark" ? styles.dark_mode : styles.light_mode
              }`}
            >
              <Link
                href={`/countries/${encodeURIComponent(cca3).toLowerCase()}`}
              >
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
          </div>
        ))
        .splice(0, 8)}
    </>
  );

  return (
    <main
      className={`${styles.main_layout} ${
        mode === "dark" ? styles.dark_mode : styles.light_mode
      }`}
    >
      <section className={styles.container}>
        <div className={styles.filters}>
          <form className={styles.nosubmit}>
            <input
              type="search"
              placeholder="Search for a country..."
              onChange={(event) => setQuery(event.target.value)}
              className={styles.placeholder}
            />
          </form>
          {filterByRegion}
        </div>

        <section className={styles.card_grid}>
        {regionSelected
          ? data
              .filter(({ region }) => region === regionSelected) .filter(({ name }) => {
                if (name === "") {
                  return data;
                } else if (name.common.toLowerCase().includes(query.toLowerCase())) {
                  return data;
                }
              }).map(({ flags, name, population, region, capital, cca3 }) => (
                <div
                  key={name.common}
                  className={`${styles.cards} ${
                    mode === "dark" ? styles.dark_mode : styles.light_mode
                  }`}
                >
                  <img
                    className={styles.card_flags}
                    src={flags.png}
                    alt={`bandeira de ${name}`}
                  />
                  <div
                    className={`${styles.card_info} ${
                      mode === "dark" ? styles.dark_mode : styles.light_mode
                    }`}
                  >
                    <Link
                      href={`/countries/${encodeURIComponent(
                        cca3
                      ).toLowerCase()}`}
                    >
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
                </div>
              ))
          : countries}
          </section>
      </section>
    </main>
  );
}
