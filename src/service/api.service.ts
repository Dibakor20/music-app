import { ResultType } from "@remix-run/router/dist/utils";
import axios from "axios"

export const getAllMusic = async (query:string) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: query, locale: 'en-US', offset: '0', limit: '5'},
        headers: {
          'X-RapidAPI-Key': '13f183eeb5mshbb9b637bdba7472p188837jsn78859bb0eee8',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };
    try {
        const result = await axios<any>(options) 
        if (result.status === 200) {
            return result.data;
        }
        
    }
    catch (error) {
        console.log(error)
    }
}

