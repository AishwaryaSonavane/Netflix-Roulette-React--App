
import { AppProps } from "next/app";
import Head from "next/head";
import ErrorBoundary from "../components/error/Error-Boundary";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <div>
        <Head>
            <title>Netflix Roulette App</title>
            <link rel="manifest" href="../public/manifest.json" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Web site created using create-react-app"
            />
        </Head>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
     </div>
    )
  }

  export default wrapper.withRedux(MyApp);