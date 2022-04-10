import Link from "next/link";
import { useState, useEffect } from "react";

export default function CountryDetail({ country }) {
  const [borders, setBorders] = useState(country.borders);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(borders);
    if (borders != undefined) {
      setLoading(true);

      async function promises() {
        const vizinhos = borders.map(async (border) => {
          const data = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${border}`
          );
          const result = await data.json();
          const countryName = result.map(({ name }) => `${name.common} `);
          setLoading(false);

          return countryName;
        });

        const resolved = await Promise.all(vizinhos);
        setBorders(resolved);
        setLoading(false);
      }

      promises();
    }
  }, []);

  return (
    <section>
      <aside>
        <Link href="/"> Back to Home </Link>
      </aside>

      <img
        src={country.flags.png}
        alt={`bandeira de ${country.name.common}`}
      ></img>
      <div>
        <h2> {country.name.common}</h2>
        <ul>
          <li>
            Native Name:
            {
              Object.values(country.name.nativeName)[
                Object.values(country.name.nativeName).length - 1
              ].common
            }
          </li>
          <li>Population: {country.population}</li>
          <li>Region: {country.region}</li>
          <li>Sub Region:{country.subregion}</li>
          <li>Capital:{country.capital}</li>
          <li>Top Level Domain: {country.tld[0]}</li>
          <li>Curriencies: {Object.values(country.currencies)[0].name} </li>
          <li>
            Languages:
            {Object.values(country.languages).join(", ")}
          </li>
          <li>Border Country: {loading ? "loading..." : borders}</li>
        </ul>
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const countryId = params.countryId.toLowerCase();
  const results = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryId}`
  ).then((res) => res.json());

  return {
    props: {
      country: results[0],
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
