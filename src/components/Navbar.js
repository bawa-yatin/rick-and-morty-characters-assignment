import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  useSelector((state) => state.CharacterReducer.numberOfFav);
  return (
    <header className="Navbar">
      <div className="Toolbar">
        <Link to={"/"} className="Title" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "23px" }}>Rick and Morty Browser</span>
        </Link>
        <div>
          <Link className="mx-2" to={"/"}>
            CHARACTERS
          </Link>
        </div>
        <div>
          <Link className="mx-2" to={"/fav"}>
            FAVOURITES
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
