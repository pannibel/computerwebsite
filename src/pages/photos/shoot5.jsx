import Link from "next/link";
import styles from "../../styles/page.module.scss";

function shoot5() {
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
              <h3>MAY 2023</h3>
              <h4>ANALOG / PENTAX ESPIO 80</h4>
            </div>
    
            <div className={styles.imageFlex}>

            <div className={styles.imageContainer}>
                <img src="../images/may2023/8.webp" alt="photo5" />
              </div>
    
            <div className={styles.imageContainer}>
                <img src="../images/may2023/1.webp" alt="photo1" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/may2023/2.webp" alt="photo4" />
              </div>
    
            <div className={styles.imageContainer}>
                <img src="../images/may2023/3.webp" alt="photo6" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/may2023/4.webp" alt="photo3" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/may2023/5.webp" alt="photo2" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/may2023/6.webp" alt="photo5" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/may2023/7.webp" alt="photo5" />
              </div>
            </div>
          </section>
    
          <footer className={styles.footer}>pannibel 2023</footer>
        </main>
      );
}

export default shoot5