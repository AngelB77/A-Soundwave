
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
          <div className="header-left">
            <img src="src/assets/Imagenes/logo.png" alt="Logo"/>
            <h1>Soundwave</h1>
          </div>
          <dir className="header-right">
            <nav>
              <li>Discover</li>
              <li>Join</li>
            </nav>
          </dir>
        </header>
      );
};

export default Header