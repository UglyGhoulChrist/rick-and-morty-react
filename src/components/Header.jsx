import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a
          href="https://rickandmortyapi.com/"
          rel="noreferrer"
          target="_blank"
          className="nav__link"
        >
          <h1>© Rick and Morty</h1>
        </a>
      </nav>
    </header>
  );
}

export default Header;
