import Link from "next/link";
import styles from "../../styles/page.module.scss";

function shoot3() {
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
          <h3>SPORO WODY NEW RELEASE '003_04'</h3>
          <h4>DIGITAL / CANON EOS 70D</h4>
        </div>

        <div className={styles.imageFlex}>

        <div className={styles.imageContainer}>
            <img src="../images/hub01/_MG_3441.jpg" alt="photo1" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/hub01/_MG_3411.jpg" alt="photo4" />
          </div>

        <div className={styles.imageContainer}>
            <img src="../images/hub01/_MG_3410.jpg" alt="photo6" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/hub01/_MG_3472.jpg" alt="photo3" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/hub01/_MG_3414.jpg" alt="photo2" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/hub01/_MG_3627.jpg" alt="photo5" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/hub01/_MG_3507.jpg" alt="photo5" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/hub01/_MG_3648.jpg" alt="photo5" />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default shoot3