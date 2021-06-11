import "../styles/globals.css";
import Layout from "../components/Layout";
import { useCookies } from "react-cookie";
import { UserProvider } from "../user-hook";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [cookie, setCookie] = useCookies();
  pageProps.loggedIn = "token" in cookie;
  pageProps.token = cookie.token;

  return (
    <UserProvider>
      <Layout {...pageProps}>
        <Head>
          <title>CryptoPulse</title>
          <link rel="shortcut icon" href="favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
