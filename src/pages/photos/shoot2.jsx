import Link from "next/link";
import styles from "../../styles/page.module.scss";

function shoot2() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>
          <Link href="/projects">photo album</Link>
        </h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.album}>
      <div className={styles.backbutton}>
        <Link href="/photos">{`<<<`}</Link>
      </div>
      
        <div className={styles.title}>
          <h3>SUMMER IN CROATIA</h3>
          <h4>ANALOG / PENTAX ESPIO 80</h4>
        </div>

        <div className={styles.imageFlex}>
        <div className={styles.imageContainer}>
            <img src="../images/summer2023/1.jpg" alt="photo6" />
          </div>

        <div className={styles.imageContainer}>
            <img src="../images/summer2023/2.jpg" alt="photo4" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/summer2023/3.jpg" alt="photo2" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/summer2023/4.jpg" alt="photo1" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/summer2023/5.jpg" alt="photo3" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/summer2023/6.jpg" alt="photo5" />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default shoot2