import "../styles/globals.css";
import type { AppProps } from "next/app";
import { setMocking } from "../mocks/setMocking";
import "../public/static/fonts/style.css";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/Theme";
import { pageview, GA_TRACKING_ID } from "../lib/gtag";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import ConfirmModal from "../common/modal/ConfirmModal";
import AlertModal from "../common/modal/AlertModal";
declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  setMocking();
  const router = useRouter();

  useEffect(() => {
    setGoogleAnalytics();

    setHeightProperty();
    window.addEventListener("resize", setHeightProperty);
  }, []);

  const setGoogleAnalytics = () => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  };

  const setHeightProperty = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>Text me!</title>
          <meta property="og:url" content="https://textme.gifterz.site"></meta>
          <meta name="author" content="GIFTERZ" />
          <meta name="description" content="추억이 담긴 편지를 작성해보세요!" />
          <meta
            property="og:image"
            content="static/images/room-background.webp"
          />
          <meta
            property="og:description"
            content="추억이 담긴 편지를 작성해보세요!"
          />
          <meta
            property="og:title"
            content="Text me! 추억이 담긴 편지를 작성해보세요"
          />
          <link rel="preconnect" href={process.env.NEXT_PUBLIC_BASE_URL} />
          <link rel="preconnect" href={"https://www.googletagmanager.com"} />
        </Head>

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_TAG_MANAGER}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script id="google-tag-manager">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GA_TAG_MANAGER}');`}</Script>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
                `,
          }}
        />
        <ConfirmModal />
        <AlertModal />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
