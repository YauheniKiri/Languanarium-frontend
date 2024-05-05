import FeatureCard from "../FeatureCard.tsx/FeatureCard";
import styles from "./feature.module.scss";

const features = [
  {
    title: "Translator",
    capabilities: ["Translate words", "Add them to your dictionary"],
    link: "/translator",
  },
];

export default function Features() {
  return (
    <section>
      <h2 className={styles.title}>Features</h2>
      <ul className={styles.list}>
        {features.map((feature, index) => (
          <li key={index}>
            <FeatureCard options={feature}></FeatureCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
