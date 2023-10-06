import Link from "next/link";
import styles from "../../styles/page.module.scss";

function pro2() {
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
          <h3>TOUCH DESIGNER 01</h3>
          <h4>
            First time trying out Touch Designer following a tutorial on Youtube
            while I was sick
          </h4>
        </div>

        <div className={styles.imageFlex}>

        <div className={styles.imageContainer} id={styles.video03}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_03.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.imageContainer} id={styles.video02}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_02.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className={styles.imageContainer} id={styles.video04}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_04.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.imageContainer} id={styles.video01}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_01.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.imageContainer} id={styles.video05}>
            <video loop autoPlay muted>
              <source src="../videos/touchd_05.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default pro2;
