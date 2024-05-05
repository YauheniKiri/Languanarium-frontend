import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { platypi } from "@/fonts";
import styles from "./page.module.scss";
import "@/src/styles/global.scss";

import Navigation from "@/src/ui/Navigation/Navigation";
import Wrapper from "../ui/Wrapper/Wrapper";

export const metadata: Metadata = {
  title: "Languanarium",
  description: "The platform for learning languages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <CssBaseline>
        <html lang="en">
          <body className={platypi.className}>
            <div className={styles.container}>
              <header className={styles.header}>
                <Wrapper>
                  <Navigation></Navigation>
                </Wrapper>
              </header>
              <Wrapper>{children}</Wrapper>
              <footer className={styles.footer}></footer>
            </div>
          </body>
        </html>
      </CssBaseline>
    </AppRouterCacheProvider>
  );
}
