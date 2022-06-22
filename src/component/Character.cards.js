import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { favouriteCharacter, getCharacter } from "../Action_reducer/reducers";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Character.card.css";

function Charactercards() {
  const characters = useSelector(
    (state) => state.CharacterReducer.characters.results
  );
  const favCardColor = useSelector(
    (state) => state.CharacterReducer.favCharColor
  );

  // console.log(favCardColor);

  // const other = useSelector((state) => state.CharacterReducer.characters.info);
  const loaded = useSelector((state) => state.CharacterReducer.loaded);
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacter());
  }, []);

  if (loaded) {
    var cards = characters.map((elem) => {
      return (
        <React.Fragment>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="profile-card-6 mb-4">
              <IconButton
                aria-label="add to favorites"
                color={favCardColor ? favCardColor : "secondary"}
                onClick={() => {
                  dispatch(favouriteCharacter(elem.url));
                  setFlag(!flag);
                }}
                style={{ position: "absolute", right: "0", zIndex: "9" }}
              >
                <FavoriteIcon />
              </IconButton>
              <img src={elem.image} className="img img-responsive" />
              <div className="profile-name">{elem.name}</div>
              <div className="profile-overview">
                <div className="profile-overview">
                  <div className="row text-center">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
                      <h5>Gender</h5>
                      <p>{elem.gender}</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
                      <h5>Status</h5>
                      <p>{elem.status}</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6">
                      <h5>Species</h5>
                      <p>{elem.species}</p>
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
                  >
                    Want More Info?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
  }
  return <>{cards}</>;
}

export default Charactercards;
