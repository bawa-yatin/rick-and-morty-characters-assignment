import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./characterDetails.css";

function CharacterDetails() {
  const pageURL = window.location.href;
  const urlArray = pageURL.split("/");
  const pageID = parseInt(urlArray[urlArray.length - 1], 10);
  const characters = useSelector(
    (state) => state.CharacterReducer.characters.results
  );
  const trueCharacter = characters.filter(
    (character) => character.id === pageID
  )[0];

  const image = trueCharacter.image;
  const name = trueCharacter.name;
  const id = trueCharacter.id;
  const status = trueCharacter.status;
  const gender = trueCharacter.gender;
  const species = trueCharacter.species;
  const first_seen = trueCharacter.origin.name;
  const last_seen = trueCharacter.location.name;
  const played_on = trueCharacter.episode.length;
  const created_at = trueCharacter.created;

  return (
    <div className="char-details" style={{ margin: "90px" }}>
      <section class="about-section gray-bg py-5" id="about">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-6">
              <div class="about-text go-to">
                <h3 class="dark-color mb-4">About Me</h3>
                <h4 class="theme-color lead mb-1">{name}</h4>
                <div class="row about-list">
                  <div class="col-md-6">
                    <div class="media">
                      <label>Id</label>
                      <p>{id}</p>
                    </div>
                    <div class="media">
                      <label>Status</label>
                      <p>{status}</p>
                    </div>
                    <div class="media">
                      <label>Gender</label>
                      <p>{gender}</p>
                    </div>
                    <div class="media">
                      <label>Species</label>
                      <p>{species}</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <label>First Seen</label>
                      <p>{first_seen}</p>
                    </div>
                    <div class="media">
                      <label>Last Seen</label>
                      <p>{last_seen}</p>
                    </div>
                    <div class="media">
                      <label>Played On</label>
                      <p>
                        {played_on} {played_on > 1 ? "episodes" : "episode"}
                      </p>
                    </div>
                    <div class="media">
                      <label>Created At</label>
                      <p>{created_at}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-avatar">
                <img src={image} alt="User Image" />
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
              <Link
                to="/"
                type="button"
                class="btn btn-outline-success mt-5"
                style={{ display: "block", margin: "0 auto" }}
              >
                Back to Home Page
              </Link>
            </div>
            <div class="col-lg-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CharacterDetails;
