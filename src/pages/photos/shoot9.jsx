import Link from "next/link";
import styles from "../../styles/page.module.scss";

function shoot9() {
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
              <h3>SUMMER 2022</h3>
              <h4>ANALOG / PENTAX SPOTMATIC</h4>
            </div>
    
            <div className={styles.imageFlex}>
    
            <div className={styles.imageContainer}>
                <img src="../images/summer2022/1.webp" alt="photo1" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/summer2022/2.webp" alt="photo4" />
              </div>
    
            <div className={styles.imageContainer}>
                <img src="../images/summer2022/3.webp" alt="photo6" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/summer2022/4.webp" alt="photo3" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/summer2022/5.webp" alt="photo2" />
              </div>

              <div className={styles.imageContainer}>
                <img src="../images/summer2022/6.webp" alt="photo2" />
              </div>

              <div className={styles.imageContainer}>
                <img src="../images/summer2022/7.webp" alt="photo2" />
              </div>

              <div className={styles.imageContainer}>
                <img src="../images/summer2022/8.webp" alt="photo2" />
              </div>
            </div>
          </section>
    
          <footer className={styles.footer}>pannibel 2023</footer>
        </main>
      );
}

export default shoot9