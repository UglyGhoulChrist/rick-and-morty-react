import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Main.scss";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";

function Main() {
  const URL = "https://rickandmortyapi.com/api/";
  const [url, setUrl] = useState(URL + "character");
  const [error, setError] = useState("");
  //const [loading, setLoading] = useState(true);
  const [btnPrev, setBtnPrev] = useState(null);
  const [btnNext, setBtnNext] = useState(null);
  // Результат для всех карточек
  const [results, setResults] = useState([]);
  // Результат для модалки
  const [result, setResult] = useState(null);
  const [vh, setVh] = useState(window.innerHeight * 0.01);

  useEffect(() => {
    document.body.style.overflow = result ? "hidden" : "";
    window.onresize = () => {
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setVh(window.innerHeight * 0.01);
    };
  }, [vh, result]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBtnPrev(data.info.prev);
        setBtnNext(data.info.next);
        setResults(data.results);
        // console.log("useEffect", data.results);
        // Прокрутка наверх
        window.scrollTo(0, 0);
      })
      .catch((error) => setError(error.message));
    //.finally(() => setLoading(false));
  }, [url]);

  return (
    <main className="main">
      {/* Блок кнопок выбор [Перcонажи, Локации, Эпизоды] */}
      <div className="buttons">
        {/* // ToDo переделать добавление класса актив */}
        <Button
          onClick={() => setUrl(URL + "character")}
          active={url.includes("character")}
          text="Перcонажи"
        />
        <Button
          onClick={() => setUrl(URL + "location")}
          active={url.includes("location")}
          text="Локации"
        />
        <Button
          onClick={() => setUrl(URL + "episode")}
          active={url.includes("episode")}
          text="Эпизоды"
        />
      </div>
      {/* Заголовок или ошибка */}
      {error && <h1>Error: {error}</h1>}

      {/* Блок карточек */}
      {results && (
        <div className="cards">
          {results.map((card) => (
            <Card
              {...card}
              key={card.id}
              onClick={() => {
                setResult(card);
              }}
            />
          ))}
        </div>
      )}

      {/* Модальное окно портируется в body*/}
      {ReactDOM.createPortal(
        <Modal {...result} show={!result} onClick={() => setResult(null)} />,
        document.getElementById("modal")
      )}

      {/* Блок кнопок [Назад, Вперёд] */}
      {results && (
        <div className="buttons">
          {btnPrev && <Button onClick={() => setUrl(btnPrev)} text="Назад" />}
          {btnNext && <Button onClick={() => setUrl(btnNext)} text="Вперёд" />}
        </div>
      )}
    </main>
  );
}

export default Main;
