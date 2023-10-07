import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";
import img1 from "../../../public/images/summer2020/1.webp";
import img2 from "../../../public/images/summer2020/2.webp";
import img3 from "../../../public/images/summer2020/3.webp";
import img4 from "../../../public/images/summer2020/4.webp";
import img5 from "../../../public/images/summer2020/5.webp";
import img6 from "../../../public/images/summer2020/6.webp";
import img7 from "../../../public/images/summer2020/7.webp";

function shoot11() {
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
              <h3>SUMMER 2020</h3>
              <h4>ANALOG / PENTAX SPOTMATIC</h4>
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

export default shoot11