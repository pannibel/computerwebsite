import Link from "next/link";
import styles from "../../styles/page.module.scss";

function Favs() {
  return (
    <>
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>monthly favorites</h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.posts}>
      <h1 className={styles.comingsoon}>COMING SOON</h1>
        <div className={styles.favs}>
{/*           <ul>
            <li><Link href="/favs/dec2023">DECEMBER '23</Link></li>
            <li><Link href="/favs/nov2023">NOVEMBER '23</Link></li>
            <li><Link href="/favs/oct2023">OCTOBER '23</Link></li>
          </ul> */}
        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default Favs;
