import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongProps } from "../components/home/Search";


export interface FavouriteProps{
    favourite: SongProps[];
}

const initialState: FavouriteProps = {
    favourite:[]
}

export const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        storeFavouriteData:(state,{payload}:PayloadAction<FavouriteProps>)=>payload as FavouriteProps
    }
})



export default favouriteSlice.reducer;
export const { storeFavouriteData } = favouriteSlice.actions; 