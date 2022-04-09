import Link from "next/link";
import { useState, useEffect } from "react";

export default function CountryDetail({ country }) {
  const [borders, setBorders] = useState(country.borders);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(borders);
    if (country.borders.length > 0) {
      setLoading(true);

      const vizinhos = async () => {
        const data = await fetch(
          `https://restcountries.com/v3.1/alpha/${borders[0]}`
        );
        const result = await data.json();
        const countryName = result[0]?.name.common;
        setLoading(false);
        return setBorders(countryName);
      };

      vizinhos();
    } else {
      return `não deu certo!`;
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
            {Object.values(country.languages).map((item) => `${item} `)}
          </li>
          <li>Border Country: {loading ? "loading..." : borders}</li>
        </ul>
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const countryId = params.countryId.replace(/\-/g, "+");
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
    paths: countries.map(({ name }) => {
      const countryId = name.common.toLowerCase().replace(/ /g, "-");
      return {
        params: {
          countryId,
        },
      };
    }),
    fallback: false,
  };
}
