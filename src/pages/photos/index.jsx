import Link from "next/link";
import styles from "../../styles/page.module.scss";

function Photos() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Photos</h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.posts}>
        <div className={styles.shoots}>
          <ul>
            <li>
              <Link href="/photos/shoot1">SHOOT 01</Link>
            </li>
            <li>
              <Link href="/photos/shoot2">SHOOT 02</Link>
            </li>
            <li>
              <Link href="/photos/shoot3">SHOOT 03</Link>
            </li>
            <li>
              <Link href="/photos/shoot2">SHOOT 04</Link>
            </li>
            <li>
              <Link href="/photos/shoot1">SHOOT 05</Link>
            </li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default Photos;
