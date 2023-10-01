import Link from "next/link";
import styles from "../../styles/page.module.scss";

function Projects() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Projects</h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.posts}>
        <div className={styles.projects}>
          <ul>
            <li><Link href="/projects/pro1">PROJECT 01</Link></li>
            <li><Link href="/projects/pro2">PROJECT 02</Link></li>
            <li><Link href="/projects/pro3">PROJECT 03</Link></li>
            <li><Link href="/projects/pro2">PROJECT 04</Link></li>
            <li><Link href="/projects/pro1">PROJECT 05</Link></li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default Projects;
