import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";
import img1 from "../../../public/images/summer2023/1.webp";
import img2 from "../../../public/images/summer2023/2.webp";
import img3 from "../../../public/images/summer2023/3.webp";
import img4 from "../../../public/images/summer2023/4.webp";
import img5 from "../../../public/images/summer2023/5.webp";
import img6 from "../../../public/images/summer2023/6.webp";
import img7 from "../../../public/images/summer2023/7.webp";
import img8 from "../../../public/images/summer2023/8.webp";
import img9 from "../../../public/images/summer2023/9.webp";

function shoot2() {
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

      <h4 className={styles.disclaimer}>(Images might load slow, please be patient)</h4>


      <section className={styles.album}>
      <div className={styles.backbutton}>
        <Link href="/photos">{`<<<`}</Link>
      </div>
      
        <div className={styles.title}>
          <h3>SUMMER IN CROATIA</h3>
          <h4>ANALOG / PENTAX ESPIO 80</h4>
          <p>My favorite photos of our family holiday in a small, hidden village right next to the sea.</p>
        </div>

        <div className={styles.imageFlex}>
        <div className={styles.imageContainer}>
            <Image src={img1} alt="img1" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img8} alt="img8" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img2} alt="img2" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img9} alt="img9" layout="responsive" loading="eager"></Image>
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
            <Image src={img4} alt="img4" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img3} alt="img3" layout="responsive" loading="eager"></Image>
          </div>
        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default shoot2