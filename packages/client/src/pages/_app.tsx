/**
 * @file Defines the custom application component.
 */

import "setimmediate";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: Do we need these two (2) tags in production? */}
        <meta charSet="utf-8" key="char-set" />
        <meta
          content="width=device-width, initial-scale=1, viewport-fit=cover"
          key="viewport"
          name="viewport"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
