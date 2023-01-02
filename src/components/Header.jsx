import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a
          href="https://rickandmortyapi.com/"
          rel="noreferrer"
          target="_blank"
          className={styles.link}
        >
          © Rick and Morty
        </a>
      </nav>
    </header>
  );
}

export default Header;
