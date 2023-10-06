import Link from "next/link";
import styles from "../../styles/page.module.scss";

function shoot6() {
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
              <h3>VINHANEN BIRTHDAY</h3>
              <h4>ANALOG / PENTAX ESPIO 80</h4>
            </div>
    
            <div className={styles.imageFlex}>

            <div className={styles.imageContainer}>
                <img src="../images/vinhanen/7.jpg" alt="photo5" />
              </div>

              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/5.jpg" alt="photo2" />
              </div>
    
            <div className={styles.imageContainer}>
                <img src="../images/vinhanen/1.jpg" alt="photo1" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/2.jpg" alt="photo4" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/4.jpg" alt="photo3" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/6.jpg" alt="photo5" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/8.jpg" alt="photo5" />
              </div>

              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/9.jpg" alt="photo6" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/10.jpg" alt="photo3" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/11.jpg" alt="photo2" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/12.jpg" alt="photo5" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/13.jpg" alt="photo5" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/vinhanen/14.jpg" alt="photo5" />
              </div>
            </div>
          </section>
    
          <footer className={styles.footer}>pannibel 2023</footer>
        </main>
      );
}

export default shoot6