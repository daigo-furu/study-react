import Image from "next/image";
import styles from "@/app/page.module.css"
import { Links } from "@/components/Links";
import { Footer } from "@/components/Footer";
import { Headline } from "@/components/Headline";

const titleName:string = "About Page"

export const metadata = {
  title: titleName,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Headline page="about" />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
