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
            <Link href="/photos">photos</Link>
          </li>
          <li>
            <Link href="/favs">monthly favorites</Link>
          </li>
        </ul>
      </nav>

      <section className={styles.about}>
        <div>
        <p>
          Heeey, I'm Panni and here you can find stuff that I'm making. I work with digital and physical materials, graphic design is my passion, coding is an obsession, but I also love to take photos and write out my thoughts sometimes. <a>Click here</a> if you wanna be updated about any new posts, otherwise <a>here are</a> some of my contact details if you wanna get in touch.
        </p>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}
