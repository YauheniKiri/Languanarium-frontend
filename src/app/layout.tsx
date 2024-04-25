import "@/src/styles/global.scss";
import styles from "./page.module.scss";
import type { Metadata } from "next";
import Navigation from "@/src/ui/Navigation/Navigation";
import { platypi } from "@/fonts";
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
    <html className={platypi.className} lang="en">
      <body className={styles.container}>
        <header className={styles.header}>
          <Wrapper>
            <Navigation></Navigation>
          </Wrapper>
        </header>
        {children}
        <footer className={styles.footer}></footer>
      </body>
    </html>
  );
}
