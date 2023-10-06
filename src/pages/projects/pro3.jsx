import Link from "next/link";
import styles from "../../styles/page.module.scss";

function pro3() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>
          <Link href="/projects">projects</Link>
        </h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.post}>
      <div className={styles.backbutton}>
        <Link href="/projects">{`<<<`}</Link>
      </div>
      <div className={styles.title}>
          <h3>THE ZOO POSTERS</h3>
          <h4>
            Event posters for the Zoo in Copenhagen
          </h4>
        </div>

        <div className={styles.imageFlex}>
        <div className={styles.imageContainer} id={styles.image01}>
            <img src="../images/Zoo_Billboard_Mockup.jpg" alt="okayso_purple" />
          </div>

          <div className={styles.imageContainer} id={styles.image02}>
            <img src="../images/Zoo_Gluedmockup.jpg" alt="okayso_blue" />
          </div>
          
          <div className={styles.imageContainer} id={styles.image05}>
            <img src="../images/thezoo_2.jpg" alt="posters1" />
          </div>

          <div className={styles.imageContainer} id={styles.image06}>
            <img src="../images/thezoo_3.jpg" alt="posters2" />
          </div>

          <div className={styles.imageContainer} id={styles.image07}>
            <img src="../images/thezoo_5.jpg" alt="posters3" />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default pro3