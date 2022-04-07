import Link from "next/link";

const nativeName = (nativeName) => {
  for (const [key, value] of Object.entries(nativeName)) {
    for (const [key, value] of Object.entries(value)) {
      return value;
    }
  }
};

export default function CountryDetail({ country }) {
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
            {nativeName(country?.name?.nativeName)})
          </li>
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
