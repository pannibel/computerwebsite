import Link from "next/link";
import styles from "../../styles/page.module.scss";

function pro3() {
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
          <h3>THE ZOO POSTERS</h3>
          <p>
            Event posters for the Zoo in Copenhagen. <br /> I worked here as graphic designer next to my studies in Multimedia Design, and created banners and animations for events each week. These are some of my favourites. 
            <br /> <a href="https://www.youtube.com/@pannibel/shorts" target="_blank">Here</a> you can check out a few of the videos I also made.
          </p>
        </div>

        <div className={styles.imageFlex}>
        <div className={styles.imageContainer} id={styles.image01}>
            <img src="../images/Zoo_Billboard_Mockup.webp" alt="okayso_purple" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image02}>
            <img src="../images/Zoo_Gluedmockup.webp" alt="okayso_blue" loading="lazy"/>
          </div>
          
          <div className={styles.imageContainer} id={styles.image05}>
            <img src="../images/thezoo_2.webp" alt="posters1" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image06}>
            <img src="../images/thezoo_3.webp" alt="posters2" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image07}>
            <img src="../images/thezoo_5.webp" alt="posters3" loading="lazy"/>
          </div>
        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default pro3