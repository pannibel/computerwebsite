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
              <Link href="/blog/post1">IS CARING A LOSING GAME?</Link>
            </li>
            <li>
              <Link href="/blog/post3">ALMOST ALL MY MONEY IS GONE AND I'M RELIEVED</Link>
            </li>
            <li>
              <Link href="/blog/post1">WHERE IS CREATIVITY?</Link>
            </li>
            <li>
              <Link href="/blog/post2">JUST VERY EVOLVED ANIMALS</Link>
            </li>
            <li>
              <Link href="/blog/post2">THE CREATING HAND</Link>
            </li>
            <li>
              <Link href="/blog/post2">HEROES</Link>
            </li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default Blog;
