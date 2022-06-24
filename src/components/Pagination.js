import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCharacter } from "../redux/actions";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export var characterCount;
export var pages;

function PaginationList() {
  const dispatch = useDispatch();
  const pageinfo = useSelector(
    (state) => state.CharacterReducer.characters.info
  );
  const loaded = useSelector((state) => state.CharacterReducer.loaded);
  if (loaded) {
    pages = pageinfo.pages;
    characterCount = pageinfo.count;
  }
  return (
    <>
      <Stack spacing={2}>
        <Pagination
          count={pages}
          onChange={(e, page) => {
            dispatch(filterCharacter(`page=${page}`));
          }}
          style={{ display: "block", margin: "0 auto" }}
        />
      </Stack>
    </>
  );
}

export default PaginationList;
