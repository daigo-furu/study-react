"use client";
import Link from "next/link"
import styles from "./Header.module.css"
import {  useEffect } from "react";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
// import { GlobalValueContext } from "@/components/providers/globalValueProvider";


// 外部だと引数の渡しがめんどくさいがコンポーネントが再レンダリングされてもメソッドは再生成されない
// <a>に使う場合はイベントの型はReact.MouseEvent<HTMLAnchorElement>で、React.MouseEventだけでも一応大丈夫
// const handleClick1 = (e: React.MouseEvent<HTMLAnchorElement>, foo: number) =>{
//   console.log(e.target)
//   e.preventDefault()
//   alert(foo);
// }

export function Header() {
  const {count, isShow, handleClick1, handleClick2, handleClick3, handleDisplay} = useCounter()
  const {text, array, handelChange, handleAdd} = useInputArray()

  // 内部だとコンポーネントが再レンダリングされるとメソッドは再生成される
  // <button>の場合はReact.MouseEvent<HTMLButtonElement>でReact.MouseEventだけでも一応大丈夫
  // const handleClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(e.target); // HTMLButtonElement として扱われます
  //   setCount(count => count + 1)
  //   setCount(count => count + 1)
  // };


  // const contextValue = useContext(GlobalValueContext)
  // console.log(contextValue);
  // const {globalString, setGlobalString} = useContext(GlobalValueContext)
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
      <div>


        {isShow ? <h2>{count}</h2> : null}
        <p>
          <a
            href="/about"
            onClick={(e) => {handleClick1(e, count)}}>ボタン1
          </a>
        </p>
        <button onClick={handleClick2}>ボタン2（2カウント）</button>


        <button onClick={handleClick3}>ボタン3（10までカウント）</button>
        <button onClick={handleDisplay}
        >
          {isShow ? "非表示" : "表示"}
        </button>



        <input type="text" value={text}
          onChange={handelChange}
        />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
      </div>

      {/* <input type="text" value={globalString} */}

    </header>
  );
}
