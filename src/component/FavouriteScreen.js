import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Character.card.css";
import { Link } from "react-router-dom";

function FavouriteScreen() {
  const fav_Character = useSelector(
    (state) => state.CharacterReducer.favCharacter
  );
  const No_of_favcharacter = useSelector(
    (state) => state.CharacterReducer.numberOfFav
  );

  if (No_of_favcharacter > 0) {
    return (
      <div className="container" style={{ marginTop: "90px" }}>
        <h2 className="mb-3">Favourites</h2>
        <div className="row">
          {fav_Character.map((elem) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="profile-card-6 mb-4">
                {/* <IconButton
                    aria-label="add to favorites"
                    onClick={() => {
                      disptch(favouriteCharacter(elem.url));
                    }}
                    style={{ position: "absolute", right: "0", zIndex: "9" }}
                  >
                    <FavoriteIcon />
                  </IconButton> */}
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

      // <div className="grid_items">
      //   <Card sx={{ maxWidth: 345 }}>
      //     <CardHeader
      //       action={
      //         <IconButton aria-label="settings">
      //           <MoreVertIcon />
      //         </IconButton>
      //       }
      //       title={elem.name}
      //       subheader={elem.created}
      //     />
      //     <CardMedia
      //       component="img"
      //       height="auto"
      //       image={elem.image}
      //       alt="Paella dish"
      //     />
      //     <CardContent>
      //       <Typography
      //         fontSize="0.675rem"
      //         variant="body2"
      //         color="text.secondary"
      //       >
      //         ORIGIN : {elem.origin.name.toUpperCase()}
      //       </Typography>
      //       <Typography
      //         fontSize="0.675rem"
      //         variant="body2"
      //         color="text.secondary"
      //       >
      //         LOCATION : {elem.location.name.toUpperCase()}
      //       </Typography>
      //       <Typography
      //         fontSize="0.675rem"
      //         variant="body2"
      //         color="text.secondary"
      //       >
      //         SPACIES : {elem.species.toUpperCase()}
      //       </Typography>
      //       <Typography
      //         fontSize="0.675rem"
      //         variant="body2"
      //         color="text.secondary"
      //       >
      //         ALIVE : {elem.status.toUpperCase()}
      //       </Typography>
      //     </CardContent>
      //     <CardActions disableSpacing>
      //       <IconButton
      //         aria-label="add to favorites"
      //         onClick={() => {
      //           // disptch(favouriteCharacter(elem.url))
      //           console.log(elem.url);
      //         }}
      //       >
      //         <FavoriteIcon />
      //       </IconButton>
      //       <IconButton aria-label="share">
      //         <ShareIcon />
      //       </IconButton>
      //     </CardActions>
      //   </Card>
      // </div>
    );
  }
}

export default FavouriteScreen;
