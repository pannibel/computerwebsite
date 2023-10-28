import Link from "next/link";
import styles from "../../styles/page.module.scss";
import Image from "next/image";
import img1 from "../../../public/images/spilled/3b.webp";
import img2 from "../../../public/images/spilled/2b.webp";
import img3 from "../../../public/images/spilled/8b.webp";
import img4 from "../../../public/images/spilled/9b.webp";


function shoot10() {
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
              <h3>UNSPILLED</h3>
              <h4>DIGITAL / CANON EOS 70D</h4>
              <p>The sequel to my photoshoot "Spilled" in 2021. This time I didn't spill the drinks.
              An experiment at home with my own lights (lamps) and mirror reflections.</p>
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
    
            </div>
          </section>
    
        </main>
        <footer className={styles.footer}>pannibel 2023</footer>

        </>
      );
}

export default shoot10