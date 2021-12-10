import '../styles/globals.css';
import HeadSEO from '../components/HeadSEO';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadSEO />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
