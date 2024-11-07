"use client";
import Link from "next/link"
import styles from "./Header.module.css"
import { useCallback } from "react";

// 外部だと引数の渡しがめんどくさいがコンポーネントが再レンダリングされてもメソッドは再生成されない
// <a>に使う場合はイベントの型はReact.MouseEvent<HTMLAnchorElement>で、React.MouseEventだけでも一応大丈夫
const handleClick1 = (e: React.MouseEvent<HTMLAnchorElement>, foo: number) =>{
  console.log(e.target)
  e.preventDefault()
  alert(foo);
}

export function Header() {

  const foo = 1;
  // 内部だとコンポーネントが再レンダリングされるとメソッドは再生成される
  // <button>の場合はReact.MouseEvent<HTMLButtonElement>でReact.MouseEventだけでも一応大丈夫
  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target); // HTMLButtonElement として扱われます
    alert(foo);
  };
  // useCallbackを使うと再レンダリングされたときに再生成されない
  const handleClick3 = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
    alert(foo);
  }, []);
  // function handleClick (e: ){
  // // function handleClick (e: React.ChangeEvent<HTMLInputElement>){
  //   console.log(e.target)
  //   e.preventDefault()
  //   alert(123);
  // }
  return (
    <header className={styles.header}>
      <a
        href="/about"
        onClick={(e) => {handleClick1(e, foo)}}>ボタン1
      </a>

      <button onClick={handleClick2}>ボタン2</button>
      <button onClick={handleClick3}>ボタン3</button>

      {/* <a
        href="/about"
        onClick={(e) => {
          console.log(e.target)
          e.preventDefault()
          alert(123);
        }
        }>ボタン</a> */}
      {/* <button onClick={function () {alert(123);}}>ボタン</button> */}
      <Link className={styles.anchor} href="/">
        Index
      </Link>
      <Link className={styles.anchor} href="/about">
        About
      </Link>
    </header>
  );
}
