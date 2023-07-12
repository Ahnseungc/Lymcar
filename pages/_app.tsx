import { useEffect } from "react";

import { useRouter } from "next/router";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.replace("/main");
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
