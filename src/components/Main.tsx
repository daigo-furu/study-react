import styles from "@/app/page.module.css"
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

type Props = {
  page: string;
}

export function Main({page}:Props) {
  return (
    <main className={styles.main}>
      <Headline page={page}>
        <code>src/app/{page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
