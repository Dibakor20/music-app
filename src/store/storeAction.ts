import { SinglePlayListProps, storePlayListData } from './playlistSlice';
import axios  from 'axios';
import { AppThunk, store } from './store';
import { SongProps } from '../components/home/Search';
import { storeFavouriteData } from './favouriteSlice';

type AddsongProps = {
    song: SongProps;
    playListId:string
}

type MakeFavouriteProps = {
    isFavourite: boolean;
    playListId: string;
    songId:string
}

export const getSongAsync = async (query: string) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: {term: query, locale: 'en-US', offset: '0', limit: '5'},
            headers: {
              'X-RapidAPI-Key': '13f183eeb5mshbb9b637bdba7472p188837jsn78859bb0eee8',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
          };
          
        const result = await axios(options)
        if (result.status === 200) {
            console.log(result.data)
            return result.data.tracks.hits
        }
    }
    catch (error) {
        console.log(error)
    }
}


export const createPlayList = (data: SinglePlayListProps): AppThunk =>
    async (dispatch) => {
        const currentPlaylist = store.getState().playlists.playlists
        const updatedPlaylist = [...currentPlaylist, data]
        dispatch(storePlayListData({playlists:updatedPlaylist}))
    }


export const addSong = (data: AddsongProps): AppThunk =>
    async (dispatch) => {
        const allPlaylist = store.getState().playlists.playlists
        let targetPlaylist = allPlaylist.find((playlist) => playlist.id === data?.playListId) as SinglePlayListProps
        const targetPlaylistIndex = allPlaylist.findIndex((playlist) => playlist.id === data?.playListId)
        const updatePlaylistSongs = [...targetPlaylist.songs, data.song]
        const updatedTargetPlaylist = {
            id: targetPlaylist.id,
            title: targetPlaylist.title,
            description: targetPlaylist.description,
            songs: updatePlaylistSongs,
            
        }
        console.log(data,"add")
     
         const updatedPlaylist = [...allPlaylist.slice(0,targetPlaylistIndex),updatedTargetPlaylist,...allPlaylist.slice(targetPlaylistIndex+1)]
        
        console.log(allPlaylist,updatedPlaylist)
        dispatch(storePlayListData({playlists:updatedPlaylist}))
    }


    export const makeFavourite = (data: MakeFavouriteProps): AppThunk =>
    async (dispatch) => {
        const allPlaylist = store.getState().playlists.playlists
        const allFavourite = store.getState().favourites.favourite
        let targetPlaylist = allPlaylist.find((playlist) => playlist.id === data?.playListId) as SinglePlayListProps
        const targetPlaylistIndex = allPlaylist.findIndex((playlist) => playlist.id === data?.playListId)
        const targetSong = targetPlaylist.songs.find((song) => song.id === data.songId)
        const targetSongIndex = targetPlaylist.songs.findIndex((song) => song.id === data.songId)
        const updatedSong = {
            ...targetSong,isFavourite:data.isFavourite
        } as SongProps
        const updatedSongList = [...targetPlaylist.songs.slice(0, targetSongIndex),updatedSong ,...targetPlaylist.songs.slice(targetSongIndex+1)]

        const updatedTargetPlaylist = {
            id: targetPlaylist.id,
            title: targetPlaylist.title,
            description: targetPlaylist.description,
            songs: updatedSongList,
        }
        console.log(data.songId)

        const updatedPlaylist = [...allPlaylist.slice(0, targetPlaylistIndex), updatedTargetPlaylist, ...allPlaylist.slice(targetPlaylistIndex + 1)]
        const targetFavouriteIndex = allFavourite.findIndex((favourite) => favourite.id === data.songId)
        const updatedFavourite = [...allFavourite.slice(0,targetFavouriteIndex),updatedSong,...allFavourite.slice(targetFavouriteIndex+1)]
        
        dispatch(storePlayListData({ playlists: updatedPlaylist }))
        dispatch(storeFavouriteData({favourite:updatedFavourite}))
    }