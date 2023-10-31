import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";

function pro1() {
  return (
    <>
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
          <h3>OKAYSO</h3>
          <p>
            An experimental work in Photoshop to make print designs for a
            magazine. <br /> I wanted to try mixing different techniques within the program, testing color schemes, matching typography.
          </p>
        </div>

        <div className={styles.imageFlex}>
          <div className={styles.imageContainer} id={styles.image05}>
            <img src="../images/posters-1.webp" alt="posters1" loading="lazy" />
          </div>

          <div className={styles.imageContainer} id={styles.image03}>
            <img src="../images/okayso_orange.webp" alt="okayso_orange" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image07}>
            <img src="../images/posters-3.webp" alt="posters3" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image01}>
            <img src="../images/okayso_purple.webp" alt="okayso_purple" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image06}>
            <img src="../images/posters-2.webp" alt="posters2" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image04}>
            <img src="../images/okayso_red.webp" alt="okayso_red" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image02}>
            <img src="../images/okayso_blue.webp" alt="okayso_blue" loading="lazy"/>
          </div>
        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default pro1;
