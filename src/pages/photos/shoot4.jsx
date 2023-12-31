import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";
import img1 from "../../../public/images/hub02/_MG_2848.webp";
import img2 from "../../../public/images/hub02/_MG_2888.webp";
import img3 from "../../../public/images/hub02/_MG_2902.webp";
import img4 from "../../../public/images/hub02/_MG_2952.webp";
import img5 from "../../../public/images/hub02/_MG_2958.webp";
import img6 from "../../../public/images/hub02/_MG_3015.webp";
import img7 from "../../../public/images/hub02/_MG_3038.webp";


function shoot4() {
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

        <h4 className={styles.disclaimer}>
          (Images might load slow, please be patient)
        </h4>

        <section className={styles.album}>
          <div className={styles.backbutton}>
            <Link href="/photos">{`<<<`}</Link>
          </div>

          <div className={styles.title}>
            <h3>SPORO WODY NEW RELEASE ’003_07’</h3>
            <h4>DIGITAL / CANON EOS 70D</h4>
            <p>
              A liminal space inspired photoshoot with Hubert{" "}
              <a href="https://www.instagram.com/sporo.wody/" target="_blank">
                (Sporo Wody)
              </a>{" "}
              for his new{" "}
              <a
                href="https://open.spotify.com/track/1rBDFCeUojCOjONokeHxgu?si=60b43b4de49e4d7a"
                target="_blank">
                ambient track
              </a>
              . <br />
              Creative direction: him and me
            </p>
          </div>

          <div className={styles.imageFlex}>
            <div className={styles.imageContainer}>
              <Image
                src={img1}
                alt="img1"
                layout="responsive"
                loading="lazy"></Image>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={img5}
                alt="img5"
                layout="responsive"
                loading="lazy"></Image>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={img6}
                alt="img6"
                layout="responsive"
                loading="lazy"></Image>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={img2}
                alt="img2"
                layout="responsive"
                loading="lazy"></Image>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={img4}
                alt="img4"
                layout="responsive"
                loading="lazy"></Image>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={img7}
                alt="img7"
                layout="responsive"
                loading="lazy"></Image>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src={img3}
                alt="img3"
                layout="responsive"
                loading="lazy"></Image>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>pannibel 2023</footer>
    </>
  );
}

export default shoot4;
