import type { NextPage } from 'next';
import Responses from "@/app/ui/questions/questions";
import Header from "@/app/ui/header/header"
import styles from "./page.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Responses />
    </main>
  );
}
export default Home
