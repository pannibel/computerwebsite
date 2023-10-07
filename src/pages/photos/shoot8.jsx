import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";
import img1 from "../../../public/images/H15/_MG_1639.webp";
import img2 from "../../../public/images/H15/_MG_1492.webp";
import img3 from "../../../public/images/H15/_MG_1483.webp";
import img4 from "../../../public/images/H15/_MG_1498.webp";
import img5 from "../../../public/images/H15/_MG_1530.webp";
import img6 from "../../../public/images/H15/_MG_1607.webp";
import img7 from "../../../public/images/H15/_MG_1702.webp";
import img8 from "../../../public/images/H15/_MG_1467.webp";

function shoot8() {
    return (
      <>
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
            <Image src={img1} alt="img1" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img2} alt="img2" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img3} alt="img3" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img4} alt="img4" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img5} alt="img5" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img6} alt="img6" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img7} alt="img7" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img8} alt="img8" layout="responsive" loading="eager"></Image>
          </div>

            
            </div>
          </section>
    
        </main>
        <footer className={styles.footer}>pannibel 2023</footer>

        </>
      );
}

export default shoot8