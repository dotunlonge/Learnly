import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      ></Script>
      <Component {...pageProps} />;
    </>
  );
}
