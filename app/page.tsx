import type { NextPage } from 'next';
import Header from "@/app/ui/header/header"
import styles from "./page.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}

export default Home; 
