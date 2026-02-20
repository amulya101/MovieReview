import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import './Header.scss';

export default  function Header() {
  return (
    <header className="headerContainer">
      <div className="headerContainer--top">
        <h1>Poem Port</h1>
        <p>A portfolio full of poems</p>
      </div>
      
      <Navigation />
    </header>
  );
}

