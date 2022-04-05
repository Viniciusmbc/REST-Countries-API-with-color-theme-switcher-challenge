import Head from "next/head";
import { useState } from "react";
import { useContext } from "react";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/navbar";

export default function Home({ data }) {
  // Search bar
  const [query, setQuery] = useState("");

  // Country Detail
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <NavBar />
      <input
        placeholder="Enter Post Title"
        onChange={(event) => setQuery(event.target.value)}
      />

      <div className={styles.container}>
        {data
          .filter(({ name }) => {
            if (name.common === "") {
              return data;
            } else if (
              name.common.toLowerCase().includes(query.toLowerCase())
            ) {
              return data;
            }
          })
          .map(({ name }) => (
            <ul>
              <li onClick={() => setShowDetails(true)}>{name.common}</li>
            </ul>
          ))
          .splice(0, 8)}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  // The value of the `props` key will be
  //  passed to the `Home` component

  return {
    props: {
      data,
    },
  };
}
