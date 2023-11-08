import Image from "next/image";
import styles from "../styles/page.module.scss";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import dvd_logo from "../../public/images/dvd_logo.png";
// import { P5Wrapper } from "react-p5-wrapper";
// import Sketch from "../components/sketch.jsx";

export default function Home() {
  const [openedPopup, setOpenedPopup] = useState(false);
  const dvd = useRef();

  function openPopup() {
    setOpenedPopup(!openedPopup);
    if (openedPopup) {
      console.log("popup closed");
    }
    if (!openedPopup) {
      console.log("popup open");
    }
  }

  function bounce() {
    console.log("bounce");
    setup();
    draw();
  }

  return (
    <>
      {/*  <div ref={dvd}>
        {" "}
        <Image
          src={dvd_logo}
          alt="img1"
          width={200}
          height={100}
          loading="lazy"
          onClick={() => bounce()}></Image>
      </div> */}

      {/*     <Sketch /> */}
      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.marquee}>
            {" "}
            <h1 className={styles.maintitle}>
              {" "}
              <span>w</span>
              <span>w</span>
              <span>w</span>
              <span>.</span>
              <span>p</span>
              <span>a</span>
              <span>n</span>
              <span>n</span>
              <span>i</span>
              <span>b</span>
              <span>e</span>
              <span>l</span>
              <span>.</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>{" "}
            </h1>
            <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          <h1 className={styles.maintitle}>
            {" "}
            <span>w</span>
            <span>w</span>
            <span>w</span>
            <span>.</span>
            <span>p</span>
            <span>a</span>
            <span>n</span>
            <span>n</span>
            <span>i</span>
            <span>b</span>
            <span>e</span>
            <span>l</span>
            <span>.</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>{" "}
          </h1>
          </span>
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
              <p>
                email:{" "}
                <a href="mailto: pannibel@gmail.com">pannibel@gmail.com</a>
              </p>
              <p>
                instagram:{" "}
                <a href="https://www.instagram.com/pannibel/" target="_blank">
                  @pannibel
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/anna-belevski-1737141ab/"
                  target="_blank">
                  LINKEDIN
                </a>
              </p>
              <p>
                <a href="https://www.behance.net/pannibel" target="_blank">
                  BEHANCE
                </a>
              </p>
            </div>
          </div>
        ) : (
          <section className={styles.about}>
            <div>
              {/*             <p>
              Hey, my name is Panni, welcome to my website! This is my space to upload creative works, no matter how big or small. I mainly work with digital materials, as you will see. While it’s mostly graphic design, photography, coding and UX/UI design, I am always excited to try my hand with new mediums.{" "}
              <a onClick={() => openPopup()}>Click here</a> for some of my
              contact details if you wanna get in touch.
            </p> */}

              <p>
                <span>Hey,</span> <span>my</span> <span>name</span>{" "}
                <span>is</span> <span>Panni,</span> <span>welcome</span>{" "}
                <span>to</span> <span>my</span> <span>website!</span>{" "}
                <span>This</span> <span>is</span> <span>my</span>{" "}
                <span>space</span> <span>to</span> <span>upload</span>{" "}
                <span>creative</span> <span>works,</span> <span>no</span>{" "}
                <span>matter</span> <span>how</span> <span>big</span>{" "}
                <span>or</span> <span>small.</span> <span>I</span>{" "}
                <span>mainly</span> <span>work</span> <span>with</span>{" "}
                <span>digital</span> <span>materials,</span> <span>as</span>{" "}
                <span>you</span> <span>will</span> <span>see.</span>{" "}
                <span>While</span> <span>it’s</span> <span>mostly</span>{" "}
                <span>graphic</span> <span>design,</span>{" "}
                <span>photography,</span> <span>coding</span> <span>and</span>{" "}
                <span>UX/UI</span> <span>design,</span> <span>I</span>{" "}
                <span>am</span> <span>always</span> <span>excited</span>{" "}
                <span>to</span> <span>try</span> <span>my</span>{" "}
                <span>hand</span> <span>at</span> <span>new</span>{" "}
                <span>mediums.</span>{" "}
                <a onClick={() => openPopup()}>Click here</a> <span>for</span>{" "}
                <span>some</span> <span>of</span> <span>my</span>
                <span>contact</span> <span>details</span> <span>if</span>{" "}
                <span>you</span> <span>wanna</span> <span>get</span>{" "}
                <span>in</span> <span>touch.</span>
              </p>
            </div>
          </section>
        )}
        
      </main>
      <footer className={styles.footer}>pannibel 2023</footer>
    </>
  );
}
