import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Cards.module.css";
import { useContext } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { ThemeContext } from "../../components/context/ThemeContext";

export default function CountryDetail({ country, borders }) {
  console.log(country.borders.length);
  const { mode } = useContext(ThemeContext);

  return (
    <section
      className={`${styles.country_details_main} ${
        mode === "dark" ? styles.dark_mode : styles.light_mode
      }`}
    >
      <article className={styles.country_details_container}>
        <aside className={styles.back_button}>
          <IoArrowBackOutline className={styles.back_button_arrow} />
          <Link href="/"> Back </Link>
        </aside>

        <div className={styles.country_details_card}>
          <img
            className={styles.country_details_flag}
            src={country.flags.svg}
            alt={`bandeira de ${country.name.common}`}
          ></img>
          <div
            className={`${styles.country_details_card_body} ${
              mode === "dark" ? styles.dark_mode : styles.light_mode
            }`}
          >
            <article className={styles.country_details_card_text}>
              <div>
                <ul>
                  <li>
                    {" "}
                    <h2>{country.name.common}</h2>{" "}
                  </li>
                  <li>
                    Native Name:{" "}
                    {
                      Object.values(country.name.nativeName)[
                        Object.values(country.name.nativeName).length - 1
                      ].common
                    }
                  </li>
                  <li>Population: {country.population}</li>
                  <li>Region: {country.region}</li>
                  <li>Sub Region: {country.subregion}</li>
                  <li>Capital: {country.capital}</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>
                    <b>Top Level Domain: </b>
                    {country.tld[0]}
                  </li>
                  <li>
                    <b>Curriencies: </b>
                    {Object.values(country.currencies)[0].name}{" "}
                  </li>
                  <li>
                    <b>Languages: </b>
                    {Object.values(country.languages).join(", ")}{" "}
                  </li>
                </ul>
              </div>
              <div className={styles.borders_countries}>
                {country.borders.length > 0 ? (
                  <>
                    <p>
                      {" "}
                      <b>Borders Countries:</b>{" "}
                    </p>
                    <div>
                      {borders.map(({ name }) => (
                        <p
                          key={country.cca3}
                          className={styles.border_countries_name}
                        >
                          {name.common}{" "}
                        </p>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </article>
          </div>
        </div>
      </article>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const countryId = params.countryId.toLowerCase();
  const results = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryId}?fields=name,flags,population,region,subregion,capital,languages,tld,currencies,borders`
  ).then((res) => res.json());

  const results1 =
    results.borders.length > 0
      ? await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${results.borders}`
        ).then((res) => res.json())
      : null;

  return {
    props: {
      country: results,
      borders: results1,
    },
  };
}

export async function getStaticPaths() {
  const countries = await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  );
  return {
    paths: countries.map(({ cca3 }) => {
      const countryId = cca3.toLowerCase();
      return {
        params: {
          countryId,
        },
      };
    }),
    fallback: false,
  };
}
