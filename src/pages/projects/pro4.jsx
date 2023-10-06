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
          <h3>BLENDER VACCINE</h3>
          <h4>
            First attempt at Blender, following @intranetgirl’s tutorial on Youtube
          </h4>
        </div>

        <div className={styles.imageFlex}>

        <div className={styles.imageContainer} id={styles.video10}>
            <video loop autoPlay muted>
              <source src="../videos/vaccine.mp4" type="video/mp4" />
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
