import Link from "next/link";
import styles from "../../styles/page.module.scss";

function Blog() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Blog</h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.posts}>
        <div className={styles.blog}>
          <ul>
            <li>
              <Link href="/blog/post1">POST 01</Link>
            </li>
            <li>
              <Link href="/blog/post2">POST 02</Link>
            </li>
            <li>
              <Link href="/blog/post3">POST 03</Link>
            </li>
            <li>
              <Link href="/blog/post2">POST 04</Link>
            </li>
            <li>
              <Link href="/blog/post1">POST 05</Link>
            </li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default Blog;
