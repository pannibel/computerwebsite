import Link from "next/link";
import styles from "../../styles/page.module.scss";

function pro2() {
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
          <h3>TOUCH DESIGNER 01</h3>
          <p>
            First time trying out Touch Designer following a tutorial on Youtube
            while I was sick.  <br /> This program was completely new to me, but the node system reminds me of that of coding, so my brain caught on quite fast. The system behind every animation here is essentially the same, only small changes here and there make a big difference in the final product.
          </p>
        </div>

        <div className={styles.imageFlex}>

        <div className={styles.imageContainer} id={styles.video03}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_03.mp4" type="video/mp4" loading="lazy"/>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.imageContainer} id={styles.video02}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_02.mp4" type="video/mp4" loading="lazy"/>
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className={styles.imageContainer} id={styles.video04}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_04.mp4" type="video/mp4" loading="lazy"/>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.imageContainer} id={styles.video01}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_01.mp4" type="video/mp4" loading="lazy"/>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.imageContainer} id={styles.video05}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_05.mp4" type="video/mp4" loading="lazy"/>
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default pro2;
