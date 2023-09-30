import Image from "next/image";
import styles from "../styles/page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1> Welcome to my computer website!</h1>
      </header>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            <Link href="/music">music</Link>
          </li>
          <li>
            <Link href="/favs">monthly favorites</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
