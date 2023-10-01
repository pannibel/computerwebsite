import Link from 'next/link'
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

    <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  )
}

export default Projects