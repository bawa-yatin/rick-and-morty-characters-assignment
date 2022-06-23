import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const filterCharacter = createAsyncThunk(
  "get/filtercharacter",
  async (url) => {
    const apiURL = `https://rickandmortyapi.com/api/character/?&${url}`;
    const response = await axios.get(apiURL).catch((err) => {
      console.log("Fetching error ", err);
      console.log("url", apiURL);
    });
    console.log("Filter Character", response.data);
    return response.data;
  }
);
