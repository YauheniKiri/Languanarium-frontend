"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./navigation.module.scss";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Translator",
    href: "/translator",
  },
];

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul className={styles.menu}>
        {navigation.map(({ name, href }, index) => {
          const isActive = path === href;

          return (
            <li key={index}>
              <Link
                className={clsx(styles.item, isActive && styles.active)}
                href={href}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
