import Image from "next/image";
import styles from "../styles/page.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openedPopup, setOpenedPopup] = useState(false);

  function openPopup() {
    setOpenedPopup(!openedPopup);
    if (openedPopup) {
      console.log("popup closed");
    }
    if (!openedPopup) {
      console.log("popup open");
    }
  }

  return (
    <>
    <main className={styles.main}>
      <header className={styles.header}>
        <h1> Welcome to my website!</h1>
      </header>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <Link href="/photos">photo album</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            <Link href="/docs">docs</Link>
          </li>

{/*           <li>
            <Link href="/favs">monthly favorites</Link>
          </li> */}
        </ul>
      </nav>

      {openedPopup ? (
        <div className={styles.popupCont}>
          <div className={styles.popup}>

            <div className={styles.backbutton} onClick={() => openPopup()}>
            <p>x</p>
            </div>
            <p>email: <a href="mailto: pannibel@gmail.com">pannibel@gmail.com</a></p>
            <p>instagram: <a href="https://www.instagram.com/pannibel/" target="_blank">@pannibel</a></p>
            <p><a href="https://www.linkedin.com/in/anna-belevski-1737141ab/" target="_blank">LINKEDIN</a></p>
            <p><a href="https://www.behance.net/pannibel" target="_blank">BEHANCE</a></p>
          </div>
        </div>
      ) : (
        <section className={styles.about}>
          <div>
            <p>
              Heeey, I’m Panni and here you can find stuff that I’m making. I
              work with digital and physical materials, graphic design is my
              passion, coding is an obsession, but I also love to take photos
              and write out my thoughts sometimes.{" "}
              <a onClick={() => openPopup()}>Click here</a> for some of my
              contact details if you wanna get in touch regarding anything - if
              you wanna work together, write me about your day, give me a
              compliment, or ask any questions you have about life.
            </p>
          </div>
        </section>
      )}

    </main>
    <footer className={styles.footer}>pannibel 2023</footer>

    </>
  );
}
