import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { favouriteCharacter, getCharacter } from "../redux/reducers";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./characterCard.css";

function CharacterCards() {
  const characters = useSelector(
    (state) => state.CharacterReducer.characters.results
  );

  const favCardValue = useSelector(
    (state) => state.CharacterReducer.favCharValue
  );

  console.log(favCardValue);

  const loaded = useSelector((state) => state.CharacterReducer.loaded);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacter());
  }, []);

  if (loaded) {
    var cards = characters.map((elem) => {
      return (
        <React.Fragment>
          {favCardValue.length == 0 ? (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="profile-card-6 mb-4">
                <IconContext.Provider
                  value={{
                    color: "#212529",
                    size: "20px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "12px",
                      zIndex: "9",
                    }}
                    onClick={() => {
                      dispatch(favouriteCharacter(elem.url));
                    }}
                    id={`${elem.id}`}
                  >
                    <FaHeart />
                  </div>
                </IconContext.Provider>
                <img src={elem.image} className="img img-responsive" />
                <div className="profile-name">{elem.name}</div>
                <div className="profile-overview">
                  <div className="profile-overview">
                    <div className="row text-center">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h5>Gender</h5>
                        <p>{elem.gender}</p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h5>Status</h5>
                        <p>{elem.status}</p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h5>Species</h5>
                        <p>{elem.species}</p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h5>Played On</h5>
                        <p>
                          {elem.episode.length + " "}
                          {elem.episode.length > 1 ? "episodes" : "episode"}
                        </p>
                      </div>
                    </div>

                    <Link
                      type="button"
                      className="btn btn-success"
                      style={{
                        position: "relative",
                        display: "block",
                        margin: "auto",
                        width: "50%",
                      }}
                      to={`/character/${elem.id}`}
                      elem={elem.url}
                    >
                      Want More Info?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="profile-card-6 mb-4">
                {favCardValue.includes(elem.id) ? (
                  <IconContext.Provider
                    value={{
                      color: "#D22B2B",
                      size: "20px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "12px",
                        zIndex: "9",
                      }}
                      onClick={() => {
                        dispatch(favouriteCharacter(elem.url));
                      }}
                      id={`${elem.id}`}
                    >
                      <FaHeart />
                    </div>
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    value={{
                      color: "#212529",
                      size: "20px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "12px",
                        zIndex: "9",
                      }}
                      onClick={() => {
                        dispatch(favouriteCharacter(elem.url));
                      }}
                      id={`${elem.id}`}
                    >
                      <FaHeart />
                    </div>
                  </IconContext.Provider>
                )}

                <img src={elem.image} className="img img-responsive" />
                <div className="profile-name">{elem.name}</div>
                <div className="profile-overview">
                  <div className="profile-overview">
                    <div className="row text-center">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h5>Gender</h5>
                        <p>{elem.gender}</p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h5>Status</h5>
                        <p>{elem.status}</p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h5>Species</h5>
                        <p>{elem.species}</p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h5>Played On</h5>
                        <p>
                          {elem.episode.length + " "}
                          {elem.episode.length > 1 ? "episodes" : "episode"}
                        </p>
                      </div>
                    </div>

                    <Link
                      type="button"
                      className="btn btn-success"
                      style={{
                        position: "relative",
                        display: "block",
                        margin: "auto",
                        width: "50%",
                      }}
                      to={`/character/${elem.id}`}
                      elem={elem.url}
                    >
                      Want More Info?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      );
    });
  }
  return <>{cards}</>;
}

export default CharacterCards;
