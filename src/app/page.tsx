import Link from "next/link";
import styles from "./scss/module/Page.module.scss";
import MainView from "./pages/MainView";
import MagneticWrapper from "./components/MagneticWrapper";

export default function Home() {
  return (
    <MagneticWrapper className={styles.wrapper}>
      <header className={styles.header}>
        <h1>
          <Link className={styles.logo} href="/">
            HJ
          </Link>
        </h1>
        <h2>
          <Link className={styles.home} href="/">
            Home
          </Link>
        </h2>
      </header>
      <main className={styles.main}>
        <MainView />
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Hyejin&apos;s portfolio. All Rights
        Reserved.
      </footer>
    </MagneticWrapper>
  );
}
