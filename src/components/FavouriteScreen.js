import React from "react";
import { useSelector } from "react-redux";
import "./characterCard.css";

function FavouriteScreen() {
  const fav_Character = useSelector(
    (state) => state.CharacterReducer.favCharacter
  );
  const No_of_favcharacter = useSelector(
    (state) => state.CharacterReducer.numberOfFav
  );

  if (No_of_favcharacter > 0) {
    return (
      <div className="container mb-4" style={{ marginTop: "90px" }}>
        <h2 className="mb-3">Favourites</h2>
        <div className="row">
          {fav_Character.map((elem) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="profile-card-6 mb-4">
                <img src={elem.image} className="img img-responsive" />
                <div className="profile-name">{elem.name}</div>
                <div className="profile-overview">
                  <div className="profile-overview">
                    <div className="row text-center">
                      <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h5>Gender</h5>
                        <p>{elem.gender}</p>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h5>Status</h5>
                        <p>{elem.status}</p>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h5>Species</h5>
                        <p>{elem.species}</p>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <h5>Origin Place</h5>
                        <p>{elem.origin.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FavouriteScreen;
