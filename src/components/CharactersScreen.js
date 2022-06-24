import React, { useState } from "react";
import CharacterCards from "./CharacterCards";
import "./characterCard.css";
import { filterCharacter } from "../redux/actions";
import { useDispatch } from "react-redux";
import PaginationList from "./Pagination";

function CharactersScreen() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");

  const gender_list = ["Male", "Female", "Unknown"];
  const species_list = ["Human", "Alien"];
  const species_status = ["Alive", "Unknown", "Dead"];

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const dispatch = useDispatch();
  if (name || gender || status || species) {
    dispatch(
      filterCharacter(
        `name=${name}&gender=${gender}&status=${status}&species=${species}`
      )
    );
  }

  return (
    <div className="container mb-4" style={{ marginTop: "90px" }}>
      <h2 className="mb-3">Characters</h2>
      <h5 id="fillterHeader mb-5" style={{ textAlign: "center" }}>
        Filter Character Using Name, Species, Gender And Status
      </h5>
      <form>
        <div class="row mb-4">
          <div class="col-xl-3">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={handleChange}
              placeholder="Enter Name"
            ></input>
          </div>
          <div class="col-xl-3">
            <select
              class="form-select"
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
          <div class="col-xl-3">
            <select
              class="form-select"
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
          <div class="col-xl-3">
            <select
              class="form-select"
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
        <CharacterCards />
      </div>
      <div id="pagination">
        <PaginationList />
      </div>
    </div>
  );
}
export default CharactersScreen;
