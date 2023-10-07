import Link from "next/link";
import styles from "../../styles/page.module.scss";

function shoot4() {
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
              <h3>SPORO WODY NEW RELEASE ’003_07’</h3>
              <h4>DIGITAL / CANON EOS 70D</h4>
            </div>
    
            <div className={styles.imageFlex}>
    
            <div className={styles.imageContainer}>
                <img src="../images/hub02/_MG_2848.webp" alt="photo1" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/hub02/_MG_2888.webp" alt="photo4" />
              </div>
    
            <div className={styles.imageContainer}>
                <img src="../images/hub02/_MG_2902.webp" alt="photo6" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/hub02/_MG_2952.webp" alt="photo3" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/hub02/_MG_2958.webp" alt="photo2" />
              </div>
            </div>
          </section>
    
          <footer className={styles.footer}>pannibel 2023</footer>
        </main>
      );
}

export default shoot4