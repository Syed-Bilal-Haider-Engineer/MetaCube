import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
const initialState = {
  ceildetails: [],
  userdetails: [],
  userNfts: [],
  nftdetails: {},
  allusers: [],
  failsNfts: [],
  favList: [],
  redValue: 0,
};

export const ceilSlice = createSlice({
  name: "ceil",
  initialState,
  reducers: {
    AddCeil: (state, action) => {
      const addceil = action.payload;
      state.ceildetails = addceil;
      state.redValue = Math.floor(Math.random() * 10000) + 1;
      return state;
    },
    Adduser: (state, action) => {
      const adduser = action.payload;
      state.userdetails = adduser;
      return state;
    },
    AdduserNfts: (state, action) => {
      const addnfts = action.payload;
      state.userNfts = addnfts;
      state.redValue = Math.floor(Math.random() * 10000) + 1;
      return state;
    },
    AddNftsDetails: (state, action) => {
      const nftsdetails = action.payload;
      state.nftdetails = nftsdetails;
      return state;
    },
    Allusers: (state, action) => {
      const allusers = action.payload;
      state.allusers = allusers;
      state.redValue = Math.floor(Math.random() * 10000) + 1;
      return state;
    },
    AddfailNfts: (state, action) => {
      const failNfts = action.payload;
      state.failsNfts = failNfts;
      state.redValue = Math.floor(Math.random() * 10000) + 1;
      return state;
    },
    FavouriteNfts: (state, action) => {
      const favList = action.payload;
      state.favList = favList;
      return state;
    },
    AddFollows: (state, action) => {
      const followItems = action.payload;
      state?.userdetails?.follows.push(followItems);
      return state;
    },
    AddFavourite: (state, action) => {
      const FavItems = action.payload;
      state?.userdetails?.favoritesList.push(FavItems);
      return state;
    },
  },
});

export const {
  AddCeil,
  Adduser,
  AdduserNfts,
  AddNftsDetails,
  Allusers,
  AddfailNfts,
  FavouriteNfts,
  AddFollows,
  AddFavourite,
} = ceilSlice.actions;
export default combineReducers({
  ceilSlice: ceilSlice.reducer,
});