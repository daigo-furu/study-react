"use client";
import styles from "./Main.module.css"
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { useBgLightBlue } from "@/hooks/useBgLightBlue";

type Props = {
  page: string;
}

export function Main({page}:Props) {
  useBgLightBlue(page)
  return (
    <main className={styles.main}>
      <Headline page={page}>
        <code>src/app/{page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
