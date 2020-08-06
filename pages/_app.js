import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import Page from "@components/app/Page";
import Loader from "@components/loading/Loader";

export default function MyApp({ Component, pageProps }) {
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
