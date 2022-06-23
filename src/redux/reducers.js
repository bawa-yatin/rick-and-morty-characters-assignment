import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { filterCharacter } from "./actions";

const initialState = {
  characters: [],
  favCharacter: [],
  numberOfFav: 0,
  favCharColor: "",
  loading: true,
  loaded: false,
  loadError: false,
};

export const favouriteCharacter = createAsyncThunk(
  "get/favCharacter",
  async (characterAPI) => {
    const response = await axios.get(`${characterAPI}`).catch((err) => {
      console.log("Error while fetching favourite character : ", err);
    });
    console.log(response.data);
    return response.data;
  }
);

export const getCharacter = createAsyncThunk("get/character", async () => {
  const response = await axios
    .get("https://rickandmortyapi.com/api/character")
    .catch((err) => {
      console.log("Error :- ", err);
    });
  console.log(response.data);
  return response.data;
});

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacter.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.loaded = true;
    });
    builder.addCase(getCharacter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacter.rejected, (state) => {
      state.loadError = true;
    });
    builder.addCase(favouriteCharacter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(favouriteCharacter.fulfilled, (state, action) => {
      state.favCharacter.push(action.payload);
      state.loaded = true;
      state.numberOfFav += 1;
      state.favCharColor = "primary";
    });
    builder.addCase(favouriteCharacter.rejected, (state) => {
      state.loadError = true;
    });
    builder.addCase(filterCharacter.fulfilled, (state, action) => {
      state.characters = action.payload;
    });
    builder.addCase(filterCharacter.rejected, (state, action) => {
      state.loadError = true;
    });
  },
});

export default characterSlice.reducer;
