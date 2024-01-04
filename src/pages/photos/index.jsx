import Link from "next/link";
import styles from "../../styles/page.module.scss";

function Photos() {
  return (
    <>
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>photo album</h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>


      <section className={styles.posts}>
        <div className={styles.shoots}>
          <ul>
          <li>
              <Link href="/photos/shoot13">2023 WINTER ANALOGS</Link>
            </li>
          <li>
              <Link href="/photos/shoot12">HOW TO DRINK NATURAL WINE (FOR VINHANEN)</Link>
            </li>
            <li>
              <Link href="/photos/shoot1">CHAIR NEW RELEASE ’GO!’</Link>
            </li>
            <li>
              <Link href="/photos/shoot2">SUMMER IN CROATIA</Link>
            </li>
            <li>
              <Link href="/photos/shoot3">SPORO WODY NEW RELEASE ’003_04’</Link>
            </li>
            <li>
              <Link href="/photos/shoot4">SPORO WODY NEW RELEASE ’003_07’</Link>
            </li>
{/*             <li>
              <Link href="/photos/shoot5">MAY 2023</Link>
            </li> */}
            <li>
              <Link href="/photos/shoot6">VINHANEN BIRTHDAY</Link>
            </li>
            <li>
              <Link href="/photos/shoot7">SOME B&W ANALOGS</Link>
            </li>
            <li>
              <Link href="/photos/shoot8">H15 X VINHANEN</Link>
            </li>
            <li>
              <Link href="/photos/shoot9">SUMMER 2022</Link>
            </li>
            <li>
              <Link href="/photos/shoot10">UNSPILLED</Link>
            </li>
            <li>
              <Link href="/photos/shoot11">SUMMER 2020</Link>
            </li>
          </ul>
        </div>
      </section>

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}

export default Photos;
