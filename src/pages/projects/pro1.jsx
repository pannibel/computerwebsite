import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";

function pro1() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>
          <Link href="/projects">Projects</Link>
        </h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.post}>
        <div className={styles.title}>
          <h3>OKAYSO</h3>
          <h4>
            An experimental work in Photoshop to make print designs for a
            magazine/event/etc
          </h4>
        </div>

        <div className={styles.imageFlex}>
          <div className={styles.imageContainer} id={styles.image05}>
            <img src="../images/posters-1.jpg" alt="posters1" />
          </div>

          <div className={styles.imageContainer} id={styles.image03}>
            <img src="../images/okayso_orange.png" alt="okayso_orange" />
          </div>

          <div className={styles.imageContainer} id={styles.image07}>
            <img src="../images/posters-3.jpg" alt="posters3" />
          </div>

          <div className={styles.imageContainer} id={styles.image01}>
            <img src="../images/okayso_purple.png" alt="okayso_purple" />
          </div>

          <div className={styles.imageContainer} id={styles.image06}>
            <img src="../images/posters-2.jpg" alt="posters2" />
          </div>

          <div className={styles.imageContainer} id={styles.image04}>
            <img src="../images/okayso_red.png" alt="okayso_red" />
          </div>

          <div className={styles.imageContainer} id={styles.image02}>
            <img src="../images/okayso_blue.png" alt="okayso_blue" />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default pro1;
