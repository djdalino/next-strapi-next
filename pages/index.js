import Head from "next/head";
import Hero from "../components/Hero";
import Post from "../components/Posts";
//import styles from '../styles/Home.module.css'
import SEO from "../components/SEO";
export default function Home({ data }) {
  return (
    <div>
      <SEO />
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        <Hero />
        <Post posts={data} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://next-strapi-test.herokuapp.com/posts`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}
