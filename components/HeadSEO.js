import Head from 'next/head';

export default function HeadSEO() {
  return (
    <Head>
      <title>Weather App </title>
      <meta
        name="description"
        content="Weather App built on top of NextJS and TailwindCSS"
      />
      <link rel="icon " href="/favicon.ico" />
    </Head>
  );
}
