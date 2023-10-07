import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";

function shoot1() {
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
          <h3>CHAIR NEW RELEASE ’GO!’</h3>
          <h4>
            DIGITAL / CANON EOS 70D
          </h4>
        </div>

        <div className={styles.imageFlex}>
        <div className={styles.imageContainer}>
            <img src="../images/chair/_MG_3859.webp" alt="photo6" />
          </div>

        <div className={styles.imageContainer}>
            <img src="../images/chair/_MG_3852.webp" alt="photo4" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/chair/_MG_3824.webp" alt="photo2" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/chair/_MG_3739.webp" alt="photo1" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/chair/_MG_3839.webp" alt="photo3" />
          </div>

          <div className={styles.imageContainer}>
            <img src="../images/chair/_MG_3892.webp" alt="photo5" />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default shoot1