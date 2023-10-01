import Link from "next/link";
import styles from "../../styles/page.module.scss";

function pro1() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>
          <Link href="/projects">Projects</Link>
        </h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.post}>
        <div className={styles.title}>
          <h3>WHERE IS CREATIVITY?</h3>
          <h4>
            ON A QUEST TO SOLVE THE MYSTERY WITH THE BOOK ’CREATIVITY’ BY MIHÁLY
            CSÍKSZENTMIHÁLYI{" "}
          </h4>
        </div>

        <div className={styles.postdate}>
          <p>17.04.2023.</p>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default pro1