import Head from "next/head";

export default function SEO({ description, title, siteTitle }) {
  return (
    <Head>
      {/* <title>{`${title} | ${siteTitle}`}</title> */}
      <title>{title ? `${title} | ${siteTitle}` : `${siteTitle}`}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
