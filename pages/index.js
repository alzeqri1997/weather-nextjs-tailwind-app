import Head from 'next/head';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Weather App </title>
        <meta
          name="description"
          content="Weather App built on top of NextJS and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>this is the main app</h1>
      </main>
    </div>
  );
}
