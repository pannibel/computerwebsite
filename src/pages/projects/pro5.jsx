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
          <h3>THE JANE POSTERS</h3>
          <h4>
            Event posters for the Jane in Copenhagen
          </h4>
        </div>

        <div className={styles.imageFlex}>

        <div className={styles.imageContainer} id={styles.image22}>
            <img src="../images/Jane_Billboard_Mockup2.webp" alt="okayso_blue" />
          </div>

        <div className={styles.imageContainer} id={styles.image21}>
            <img src="../images/Jane_Billboard_Mockup.webp" alt="okayso_purple" />
          </div>
          
          <div className={styles.imageContainer} id={styles.image23}>
            <img src="../images/thejane_2.webp" alt="posters1" />
          </div>

          <div className={styles.imageContainer} id={styles.image24}>
            <img src="../images/thejane_3.webp" alt="posters2" />
          </div>

          <div className={styles.imageContainer} id={styles.image25}>
            <img src="../images/thejane_5.webp" alt="posters3" />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default pro3