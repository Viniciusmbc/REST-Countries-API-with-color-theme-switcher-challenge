import Link from "next/link";

export default function CountryDetail({ country }) {
  return (
    <section>
      <Link href="/"> Back to Home </Link>
      <h1>{country.cca2}</h1>
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
