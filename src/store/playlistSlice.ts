import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongProps } from "../components/home/Search";

export interface SinglePlayListProps{
    id: string;
    title: string;
    description?: string;
    songs: SongProps[]
}

export interface PlaylistsProps{
    playlists: SinglePlayListProps[];
}

const initialState: PlaylistsProps = {
    playlists:[]
}

export const playlistSlice = createSlice({
    name: "playlists",
    initialState,
    reducers: {
        storePlayListData:(state,{payload}:PayloadAction<PlaylistsProps>)=>payload as PlaylistsProps
    }
})



export default playlistSlice.reducer;
export const { storePlayListData } = playlistSlice.actions; 
