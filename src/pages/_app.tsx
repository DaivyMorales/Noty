import { type AppType } from "next/dist/shared/lib/utils";
import { Bricolage_Grotesque } from "next/font/google";
import Head from "next/head";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

const bricolageFont = Bricolage_Grotesque({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
        <link rel="icon" href="/Noty_favicon.png" />
      </Head>
      <main className={bricolageFont.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default MyApp;
