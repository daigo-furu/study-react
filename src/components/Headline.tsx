import Image from "next/image";
import styles from "@/app/page.module.css"

type Props = {
  page: string;
};
//
export function Headline({ page }: Props) {
  return (
    <>
      <h1 className={styles.title}>{page} page</h1>
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
          Get started by editing <code>src/app/{page}.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </>
  );
}
