import styles from "./wrapper.module.scss";

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={styles.wrapper}>{children}</div>;
}
