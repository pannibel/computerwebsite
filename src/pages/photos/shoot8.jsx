import Link from "next/link";
import styles from "../../styles/page.module.scss";

function shoot8() {
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
              <h3>H15 X VINHANEN</h3>
              <h4>DIGITAL / CANON EOS 70D</h4>
            </div>
    
            <div className={styles.imageFlex}>

            <div className={styles.imageContainer}>
                <img src="../images/H15/_MG_1639.jpg" alt="photo2" />
              </div>

            <div className={styles.imageContainer}>
                <img src="../images/H15/_MG_1492.jpg" alt="photo6" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/H15/_MG_1483.jpg" alt="photo4" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/H15/_MG_1498.jpg" alt="photo3" />
              </div>
    
              <div className={styles.imageContainer}>
                <img src="../images/H15/_MG_1530.jpg" alt="photo2" />
              </div>

              <div className={styles.imageContainer}>
                <img src="../images/H15/_MG_1607.jpg" alt="photo2" />
              </div>

              <div className={styles.imageContainer}>
                <img src="../images/H15/_MG_1702.jpg" alt="photo2" />
              </div>

              <div className={styles.imageContainer}>
                <img src="../images/H15/_MG_1467.jpg" alt="photo1" />
              </div>
            </div>
          </section>
    
          <footer className={styles.footer}>pannibel 2023</footer>
        </main>
      );
}

export default shoot8