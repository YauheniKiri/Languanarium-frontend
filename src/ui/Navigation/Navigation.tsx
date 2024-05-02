"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./navigation.module.scss";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import CloseIcon from "@mui/icons-material/Close";

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
  const [isOpened, setIsOpened] = useState(true);
  const path = usePathname();

  const handleMenuButtonClick = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  const menuButtonIcon = isOpened ? (
    <CloseIcon className={styles.icon} />
  ) : (
    <FormatAlignLeftIcon className={styles.icon} />
  );

  return (
    <div
      className={clsx(styles.container, isOpened && styles["mobile-opened"])}
    >
      <div className={styles["button-wrapper"]}>
        <button
          onClick={handleMenuButtonClick}
          className={styles.button}
          aria-label={`${isOpened ? "Close" : "Open"} navigation`}
        >
          {menuButtonIcon}
        </button>
      </div>
      {isOpened && (
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
      )}
    </div>
  );
}
