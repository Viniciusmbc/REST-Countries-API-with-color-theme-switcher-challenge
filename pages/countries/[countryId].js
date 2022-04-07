import Link from "next/link";

export default function CountryDetail({ country }) {
  async function borders(cca3) {
    const paises = await fetch(
      `https://restcountries.com/v3.1/alpha/${cca3}`
    ).then((res) => res.json());
    return Object.values(paises[0].name.common);
  }

  console.log(country.borders.map((item) => borders(`${item}`)));

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
          <li>Border Country: {}</li>
        </ul>
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const countryId = params.countryId.replace(/\-/g, "+");
  const results = await fetch(
    `https://restcountries.com/v3.1/name/${countryId}`
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
