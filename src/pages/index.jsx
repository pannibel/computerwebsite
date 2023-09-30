import Image from "next/image";
import styles from "../styles/page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1> Welcome to my website!</h1>
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

      <section className={styles.about}>
        <div>
        <p>
          Hi there, my name is Panni and on this site you can find stuff that I'm making. <a>Click here</a> if you wanna be updated about any new posts, otherwise <a>here are</a> some of my contact details if you wanna get in touch.
        </p>
        </div>
      </section>

      <footer>pannibel 2023</footer>
    </main>
  );
}
