import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="visually-hidden">
          Languanarium - useful platform for language learners
        </h1>
        <p className={styles.lead}>
          Find friends that learn your language.
          <br />
          Use useful tools.
          <br />
          Lets study together!
        </p>
      </header>
    </main>
  );
}
