import Image from "next/image";
import styles from "@/components/Links.module.css"

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "①疾風ザブングル →",
    description: "ここは地の果て流されて俺 今日もさすらい涙も枯れる"
   },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "②黄金戦士ゴールドライタン \u2192",
    description: "明日にかけて行くおれたちの願いが 届いているか聞こえるか遥かメカ次元"
   },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "③ババーンと推参！バーンブレイバーン",
    description: "この地球の嘆く声を聴け 安らぎを護る盾となれ"
   },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "④闘士ゴーディアン",
    description: "赤い血潮はその色の 真っ赤な夕日背に受けて"
   }
]

export function Links() {
  return (
    <div className={styles.ctas}>

      <div className={styles.grid}>
        {/* map関数でコンポーネントを配列として返している */}
        {ITEMS.map(item => {
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
