import Link from "next/link";
import styles from "../../styles/page.module.scss";

function Documents() {

  return (
    <>
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>docs</h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.posts}>

        <div className={styles.projects}>
          <ul>
            <li><Link href="/../images/Anna-Belevski_CV.pdf" target="_blank">CV</Link></li>
            <li><Link href="/../images/AnnaBelevski-design-portfolio.pdf" target="_blank">Graphic Design Portfolio</Link></li>
            <li><Link href="/../images/photo-portfolio.pdf" target="_blank">Photography Portfolio</Link></li>
          </ul>
        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default Documents;
