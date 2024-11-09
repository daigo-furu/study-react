"use client";
import styles from "./Main.module.css"
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { useEffect } from "react";

type Props = {
  page: string;
}

export function Main({page}:Props) {
  // マウント時に青くしたいがアンマウント時に元に戻したい場合
  // useEffectの最後で関数をreturnするとアンマウント時の処理を書ける
  // retrunまでがマウント時の処理でreturnからがアンマウント時の処理
  // 空文字にすると指定した色が解除される
  // "use client"; がないとエラーが起きる
  useEffect(() => {
    if(page === "index"){
     document.body.style.backgroundColor = "lightblue"
    }
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])
  return (
    <main className={styles.main}>
      <Headline page={page}>
        <code>src/app/{page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
