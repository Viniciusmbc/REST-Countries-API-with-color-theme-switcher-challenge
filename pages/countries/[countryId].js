import Link from "next/link";

export default function CountryDetail({ country, borders }) {

  console.log(country.borders.length );

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
          <li>Border Country: { country.borders.length > 0 ? borders?.map ( ({name, cca3}) => <ul>
            <li key={cca3}>{name.common}</li>
            </ul> ) : null}</li>
        </ul>

      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const countryId = params.countryId.toLowerCase();
  const results = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryId}?fields=name,flags,population,region,subregion,capital,languages,tld,currencies,borders`
  ).then((res) => res.json());

  const results1 =  results.borders.length > 0 ? (await fetch( `https://restcountries.com/v3.1/alpha?codes=${results.borders}`).then((res) => res.json())) : null;

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
