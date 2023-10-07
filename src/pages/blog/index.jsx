import Link from "next/link";
import styles from "../../styles/page.module.scss";

function Blog() {
  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>blog</h1>
        </header>

        <div className={styles.backbutton}>
          <Link href="/">back home</Link>
        </div>

        <section className={styles.posts}>
          <div className={styles.blog}>
            <ul>
              <li>
                <Link href="/blog/post3">{`IS CARING A LOSING GAME?`}</Link>
              </li>
              <li>
                <Link href="/blog/post2">{`ALMOST ALL MY MONEY IS GONE AND I'M RELIEVED`}</Link>
              </li>
              <li>
                <Link href="/blog/post1">{`WHERE IS CREATIVITY?`}</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>pannibel 2023</footer>
    </>
  );
}

export default Blog;
