import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";
import img1 from "../../../public/images/chair/_MG_3859.webp";
import img2 from "../../../public/images/chair/_MG_3852.webp";
import img3 from "../../../public/images/chair/_MG_3824.webp";
import img4 from "../../../public/images/chair/_MG_3739.webp";
import img5 from "../../../public/images/chair/_MG_3839.webp";
import img6 from "../../../public/images/chair/_MG_3892.webp";


function shoot1() {
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
          <h3>CHAIR NEW RELEASE ’GO!’</h3>
          <h4>
            DIGITAL / CANON EOS 70D
          </h4>
          <p>The band approached me to help them with the making of their music video for the song, as well as shooting some promotional pictures for press and social media. <br />
          Check out the AI-spiced up video <a href="https://www.youtube.com/watch?v=KmFXvvhNXqs" target="_blank">here</a> <br />
          Some of the photos got made into a <a href="https://www.instagram.com/p/CyK90duIemk/?img_index=1" target="_blank">mural</a> too!</p>
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
        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default shoot1