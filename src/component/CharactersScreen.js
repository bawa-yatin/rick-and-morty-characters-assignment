import React, { useState } from "react";
import Charactercards from "./Character.cards";
import "./Character.card.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { filterCharacter } from "../Action_reducer/Actions";
import { useDispatch } from "react-redux";
// 'species=Human&status=alive'
import Rough from "./rough";

function CharactersScreen() {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");

  const gender_list = ["Male", "Female", "Unknown"];
  const species_list = ["Human", "Alien"];
  const species_status = ["Alive", "Unknown", "Dead"];

  const disptch = useDispatch();
  if (gender || status || species) {
    disptch(
      filterCharacter(`gender=${gender}&status=${status}&species=${species}`)
    );
  }

  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <h2 className="mb-3">Characters</h2>
      <h5 id="fillterHeader mb-5" style={{ textAlign: "center" }}>
        Filter Character Using Species, Gender, Status
      </h5>
      <form>
        <div class="row mb-4">
          <div class="col-xl-4">
            <select
              class="form-select"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option selected disabled>
                Choose Gender
              </option>
              {gender_list.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div class="col-xl-4">
            <select
              class="form-select"
              value={species}
              onChange={(e) => {
                setSpecies(e.target.value);
              }}
            >
              <option selected disabled>
                Choose Species
              </option>
              {species_list.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div class="col-xl-4">
            <select
              class="form-select"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option selected disabled>
                Choose Status
              </option>
              {species_status.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <div className="row">
        <Charactercards />
      </div>
    </div>
  );
}
export default CharactersScreen;
