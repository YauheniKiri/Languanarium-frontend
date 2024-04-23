import "@/src/styles/global.scss";
import styles from "./page.module.scss";
import type { Metadata } from "next";

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
    <html lang="en">
      <body className={styles.container}>
        <header className={styles.header}></header>
        {children}
        <footer className={styles.footer}></footer>
      </body>
    </html>
  );
}
