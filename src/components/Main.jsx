import styles from "./Main.module.scss";
import Cards from "./Cards";

function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Персонажи Rick and Morty</h1>
      <Cards />
    </main>
  );
}

export default Main;
