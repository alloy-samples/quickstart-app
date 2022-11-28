import type { AppProps } from "next/app";
import { darkTheme, globalCss } from "../stitches.config";
import { ThemeProvider } from "next-themes";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";

const globalStyles = globalCss({
  html: {
    overflow: "hidden",
  },

  body: {
    margin: 0,
    backgroundColor: "$sand1",
  },

  "body, button": {
    fontFamily: "$untitled",
  },

  svg: { display: "block" },

  fieldset: {
    all: "unset",
    display: "flex",
    flexDirection: "column",
    gap: "$1",
    width: "100%",
  },

  "::selection": {
    backgroundColor: "$sand6",
  },
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    );
  }

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.className }}
      defaultTheme="light"
    >
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
