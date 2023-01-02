import { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./Cards.module.scss";
import Title from "./Title";

function Cards() {
  const [URL, setURL] = useState("https://rickandmortyapi.com/api/character");
  const [characters, setCharacters] = useState([]);
  const [btnPrev, setBtnPrev] = useState(null);
  const [btnNext, setBtnNext] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const characters = data.results;
        setBtnPrev(data.info.prev);
        setBtnNext(data.info.next);
        setCharacters(characters);
        //Прокрутка наверх
        window.scrollTo(0, 0);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [URL]);
  return (
    <>
      {(loading && <Title title="Loading..." />) ||
        (error && <Title title={error} />) || (
          <div className={styles.list}>
            {characters.map((character) => (
              <Card {...character} key={character.id} />
            ))}
          </div>
        )}

      {(btnPrev || btnNext) && (
        <div className={styles.buttons}>
          {btnPrev && <Button onClick={() => setURL(btnPrev)} text="Назад" />}
          {btnNext && <Button onClick={() => setURL(btnNext)} text="Вперёд" />}
        </div>
      )}
    </>
  );
}

export default Cards;
