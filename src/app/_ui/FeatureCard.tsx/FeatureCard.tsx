import Link from "next/link";
import styles from "./featureCard.module.scss";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

type Props = {
  options: {
    title: string;
    capabilities: string[];
    link: string;
  };
};

export default function FeatureCard({ options }: Props) {
  const { title, capabilities, link } = options;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.capabilities}>
        {capabilities.map((capability, index) => (
          <li className={styles.capability} key={index}>
            <DoneOutlineIcon className={styles.icon} />
            <p>{capability}</p>
          </li>
        ))}
      </ul>
      <Link className={styles.link} href={link}>
        Try it
      </Link>
    </div>
  );
}
