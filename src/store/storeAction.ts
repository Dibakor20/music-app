import { SinglePlayListProps, storePlayListData } from './playlistSlice';
import axios  from 'axios';
import { AppThunk, store } from './store';

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
