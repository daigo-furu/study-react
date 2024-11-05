
import styles from "@/app/page.module.css"
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";

const titleName:string = "About Page"

export const metadata = {
  title: titleName,
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Main page="about" />
      <Footer />
    </div>
  );
}
