"use client";
import Link from "next/link"
import styles from "./Header.module.css"
import { useCallback, useState,useEffect } from "react";

// 外部だと引数の渡しがめんどくさいがコンポーネントが再レンダリングされてもメソッドは再生成されない
// <a>に使う場合はイベントの型はReact.MouseEvent<HTMLAnchorElement>で、React.MouseEventだけでも一応大丈夫
const handleClick1 = (e: React.MouseEvent<HTMLAnchorElement>, foo: number) =>{
  console.log(e.target)
  e.preventDefault()
  alert(foo);
}

export function Header() {
  const [count, setCount] = useState(1)
  // 内部だとコンポーネントが再レンダリングされるとメソッドは再生成される
  // <button>の場合はReact.MouseEvent<HTMLButtonElement>でReact.MouseEventだけでも一応大丈夫
  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target); // HTMLButtonElement として扱われます
    setCount(count => count + 1)
    setCount(count => count + 1)
  };
  // useCallbackを使うと再レンダリングされたときに再生成されない
  const handleClick3 = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(e.target);
    // alert(count);
    console.log(count);
    if(count < 10){
      setCount(count => count + 1)
    }
  }, [count]);


  useEffect(() => {
    console.log(`マウント時：${count}`)
    return () => {
      console.log(`アンマウント時：${count}`)
    }
  }, [count])
  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.anchor} href="/">
          Index
        </Link>
        <Link className={styles.anchor} href="/about">
          About
        </Link>
      </div>
      <p>
        <a
          href="/about"
          onClick={(e) => {handleClick1(e, count)}}>ボタン1
        </a>
      </p>
      <div>
        <button onClick={handleClick2}>ボタン2（カウント）</button>
        <button onClick={handleClick3}>ボタン3</button>
      </div>
      <h2>{count}</h2>
    </header>
  );
}
