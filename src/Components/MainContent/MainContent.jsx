import React from "react";
import "./MainContent.css";
const MainContent =() => {
    return (
        <main className="main">
            <div className="main-left">
                <img src="src/assets/Imagenes/landing-page-girl.png" alt="chica" />
            </div>
            <div className="main-right">
                <h1>Feel The Music</h1>
                <p>Stream over thousand songs withe one click</p>
                <button>Join Now</button>
            </div>
        </main>
    );
};

export default MainContent;