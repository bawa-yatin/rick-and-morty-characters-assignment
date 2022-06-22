import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import Navbar from "./component/Navbar";
import FavouriteScreen from "./component/FavouriteScreen";
import CharactersScreen from "./component/CharactersScreen";
import CharacterDetails from "./component/CharacterDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CharactersScreen />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/fav" element={<FavouriteScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
