import styles from "@/app/page.module.css"
import { Links } from "@/components/Links";
import { Footer } from "@/components/Footer";
import { Headline } from "@/components/Headline";

export const metadata = {
  title: "Index Page",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Headline page="index" />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
