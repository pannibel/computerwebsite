import Link from "next/link";
import styles from "../../styles/page.module.scss";

function shoot11() {
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
              <h3>SUMMER 2020</h3>
              <h4>ANALOG / PENTAX SPOTMATIC</h4>
            </div>
    
            <div className={styles.imageFlex}>

            <div className={styles.imageContainer}>
                <img src="../images/summer2020/1.jpg" alt="photo4" />
              </div>
    
            <div className={styles.imageContainer}>
                <img src="../images/summer2020/2.jpg" alt="photo1" />
              </div>
    
            <div className={styles.imageContainer}>
                <img src="../images/summer2020/3.jpg" alt="photo6" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/summer2020/4.jpg" alt="photo3" />
              </div>

              <div className={styles.imageContainer}>
                <img src="../images/summer2020/5.jpg" alt="photo4" />
              </div>
    
            <div className={styles.imageContainer}>
                <img src="../images/summer2020/6.jpg" alt="photo1" />
              </div>
    
            <div className={styles.imageContainer}>
                <img src="../images/summer2020/7.jpg" alt="photo6" />
              </div>

    
            </div>
          </section>
    
          <footer className={styles.footer}>pannibel 2023</footer>
        </main>
      );
}

export default shoot11