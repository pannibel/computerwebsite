import Link from "next/link";
import styles from "../../styles/page.module.scss";

function Projects() {

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>projects</h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.posts}>
        <div className={styles.projects}>
          <h3>2023</h3>
          <ul>
            <li><Link href="/projects/pro1">OKAYSO</Link></li>
            <li><Link href="https://chair.band/" target="_blank">CHAIR.BAND WEBSITE</Link></li>
            <li><Link href="/projects/pro2">TOUCH DESIGNER 01</Link></li>
            {/* <li><Link href="/projects/pro3">ILLUSTRATIONS 03</Link></li> */}
{/*         <li><Link href="/projects/pro3">PROJECT 03</Link></li>
            <li><Link href="/projects/pro2">PROJECT 04</Link></li>
            <li><Link href="/projects/pro1">PROJECT 05</Link></li> */}
          </ul>
          <h3>2022</h3>
          <ul>
            <li><Link href="https://fruit-fest.netlify.app" target="_blank">RANGER FEST WEBSITE</Link></li>
            <li><Link href="/projects/pro3">THE ZOO POSTERS</Link></li>
            <li><Link href="/projects/pro5">THE JANE POSTERS</Link></li>
            <li><Link href="/projects/pro4">BLENDER VACCINE</Link></li>
            {/* <li><Link href="/projects/pro3">ILLUSTRATIONS 02</Link></li> */}
            {/* <li><Link href="https://pannibel.com/murdermystery/" target="_blank">MURDER MYSTERY GAME</Link></li> */}
          </ul>
          <h3>2021</h3>
          <ul>
            <li><Link href="https://pannibel.com/primetime/" target="_blank">PRIMETIME GAME (desktop only)</Link></li>
            <li><Link href="https://pannibel.com/timetravel/" target="_blank">TIME TRAVEL WEBSITE</Link></li>
            <li><Link href="https://pannibel.com/microcomputer/index.html" target="_blank">MICROCOMPUTER WEBSITE (desktop only)</Link></li>
            {/* <li><Link href="/projects/pro3">ILLUSTRATIONS 01</Link></li> */}
          </ul>

        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default Projects;
