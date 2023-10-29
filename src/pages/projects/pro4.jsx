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
          <h3>BLENDER VACCINE</h3>
          <p>
            First attempt at Blender, following @intranetgirl’s tutorial on Youtube. <br />
            It’s only a small try-out, but I enjoyed it a lot and will do more in the future.
          </p>
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

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default pro2;
