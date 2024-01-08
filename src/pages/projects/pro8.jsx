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
          <h3>2023 ZINE</h3>
          <p>
            My 2023 year in a magazine. <br /> Text, photography, grapics, layout by me (unless stated otherwise, check credits at the end). 
            Read the whole online version <Link href="/../images/23zine_digi.pdf" target="_blank">here</Link>.
          </p>
        </div>

        <div className={styles.imageFlex}>
          <div className={styles.imageContainer} id={styles.image05}>
            <img src="../images/zine/zine-1.webp" alt="zine1" loading="lazy" />
          </div>

          <div className={styles.imageContainer} id={styles.image03}>
            <img src="../images/zine/zine-3.webp" alt="zine2" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image07}>
            <img src="../images/zine/zine-8.webp" alt="zine3" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image01}>
            <img src="../images/zine/zine-4.webp" alt="zine4" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image06}>
            <img src="../images/zine/zine-9.webp" alt="zine5" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image04}>
            <img src="../images/zine/zine-6.webp" alt="zine6" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image02}>
            <img src="../images/zine/zine-7.webp" alt="zine7" loading="lazy"/>
          </div>
        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default pro1;
