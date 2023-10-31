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
          <h3>THE JANE POSTERS</h3>
          <p>
            Event posters for the Jane in Copenhagen. <br /> I worked here as graphic designer next to my studies in Multimedia Design, and created banners and animations for events each week. These are some of my favourites. 
            <br /> <a href="https://www.youtube.com/@pannibel/shorts" target="_blank">Here</a> you can check out a few of the videos I also made.
          </p>
        </div>

        <div className={styles.imageFlex}>

        <div className={styles.imageContainer} id={styles.image22}>
            <img src="../images/Jane_Billboard_Mockup2.webp" alt="okayso_blue" loading="lazy"/>
          </div>

        <div className={styles.imageContainer} id={styles.image21}>
            <img src="../images/Jane_Billboard_Mockup.webp" alt="okayso_purple" loading="lazy"/>
          </div>
          
          <div className={styles.imageContainer} id={styles.image23}>
            <img src="../images/thejane_2.webp" alt="posters1" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image24}>
            <img src="../images/thejane_3.webp" alt="posters2" loading="lazy"/>
          </div>

          <div className={styles.imageContainer} id={styles.image25}>
            <img src="../images/thejane_5.webp" alt="posters3" loading="lazy"/>
          </div>
        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default pro3