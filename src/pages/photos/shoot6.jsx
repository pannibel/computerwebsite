import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";
import img1 from "../../../public/images/vinhanen/7.webp";
import img2 from "../../../public/images/vinhanen/5.webp";
import img3 from "../../../public/images/vinhanen/1.webp";
import img4 from "../../../public/images/vinhanen/2.webp";
import img5 from "../../../public/images/vinhanen/4.webp";
import img6 from "../../../public/images/vinhanen/6.webp";
import img7 from "../../../public/images/vinhanen/8.webp";
import img8 from "../../../public/images/vinhanen/9.webp";
import img9 from "../../../public/images/vinhanen/10.webp";
import img10 from "../../../public/images/vinhanen/11.webp";
import img11 from "../../../public/images/vinhanen/12.webp";
import img12 from "../../../public/images/vinhanen/13.webp";
import img13 from "../../../public/images/vinhanen/14.webp";


function shoot6() {
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
          <h3>VINHANEN BIRTHDAY</h3>
          <h4>ANALOG / PENTAX ESPIO 80</h4>
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

          <div className={styles.imageContainer}>
            <Image src={img9} alt="img9" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img10} alt="img10" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img11} alt="img11" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img12} alt="img12" layout="responsive" loading="eager"></Image>
          </div>

          <div className={styles.imageContainer}>
            <Image src={img13} alt="img13" layout="responsive" loading="eager"></Image>
          </div>

        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default shoot6;
