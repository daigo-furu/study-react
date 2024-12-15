// import Image from "next/image";

import styles from "./Links.module.css"

type itemType = {
  href: string,
  title: string,
  description: string
}
type Props = {
  items: itemType[];
  handleReduce: () => void;
}

export function Links({items, handleReduce}:Props) {

  return (
    <div className={styles.ctas}>
      <div className={styles.grid}>
        <button onClick={handleReduce}>減らす</button>
        {/* map関数でコンポーネントを配列として返している */}
        {items.map(item => {
          return(
            <a key={item.href} href={item.href} className={styles.card}>
              <h2>{item.title} &rarr;</h2>
              <p>{item.description}</p>
            </a>
          )
        })}
      </div>
      {/* {}の中に配列でコンポーネントを配置すると直接表示できる。 */}
{/* 
      {[<p>1111</p>, <p>2222</p>, <p>3333</p>, <p>4444</p>]}
*/}

{/*       
      <a
        className={styles.primary}
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Deploy now
      </a>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.secondary}
      >
        Read our docs
      </a> */}

    </div>
  );
}
