import Image from "next/image";
import styles from "@/app/page.module.css"
import { Links } from "@/components/Links";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About Page",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>About Page</h1>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <Links />
      </main>
      <Footer />
    </div>
  );
}