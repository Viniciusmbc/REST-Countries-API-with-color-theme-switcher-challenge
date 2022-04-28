import Head from "next/head";
import { useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import { IconBase } from "react-icons";
import {FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
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

  // Filter by region
  const region = [ "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [regionSelected, setRegionSelected] = useState("");

  // all countries
  const countries = (
    <section className={styles.card_grid}>
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
    </section>
  );

  return (
    <main
      className={`${styles.main_layout} ${
        mode === "dark" ? styles.dark_mode : styles.light_mode
      }`}
    >
      <section className={styles.container}>
        <form className= {styles.nosubmit}>
        <input type="search" placeholder="Search for a country..."
              onChange={(event) => setQuery(event.target.value)}
              className={styles.placeholder}
            />
        </form>
        <form>
        <input id='first' type='checkbox'/>
    <label class='label' for='first'>
      Filter
      <div class='content'>
        <div class='inner-section'>
          <span class='section-name'>Color</span>
          <select onChange={(event) => setRegionSelected(event.target.value) }>{region.map((item) => (
            <option value={item}>{item}</option>
          ))}</select>
        </div>
        </div>
        </label>
        </form>
        <section className={styles.card_grid}>
        {regionSelected ? (
         data.filter(({ region }) => region === regionSelected)
        ).map(({ flags, name, population, region, capital, cca3 }) => (
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
         : (
          countries
        )}
          </section>
      </section>
    </main>
  );
}
