export default function CountryDetail({ countries }) {}

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const data = await fetch("https://restcountries.com/v3.1/all").then(
    (respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error("Deu problema");
    }
  );

  // The value of the `props` key will be
  //  passed to the `Home` component

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          code: "1",
        },
      },
      {
        params: {
          code: "2",
        },
      },
      {
        params: {
          code: "3",
        },
      },
    ],
    fallback: false,
  };
}
