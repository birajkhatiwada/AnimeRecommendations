const API_URL = 'https://api.jikan.moe/v3/search/anime?q=';
const TOP_UPCOMING_ANIME_URL = 'https://api.jikan.moe/v3/top/anime/1/upcoming';
const TOP_AIRING_ANIME_URL = 'https://api.jikan.moe/v3/top/anime/1/airing'


export async function animeCall(searchField){
    console.log('Inside');
    const response = await fetch(`${API_URL}`+`${searchField}`);
    const res = await response.json();
    return res.results;
}


export async function topUpcomingAnimeCall(){
    const response = await fetch(`${TOP_UPCOMING_ANIME_URL}`);
    const res = await response.json();
    return res.top;
}


export async function topAiringAnimeCall(){
    const response = await fetch(`${TOP_AIRING_ANIME_URL}`);
    const res = await response.json();
    return res.top;
}

export async function reccomendationsAnimeCall(id){
    const RECCOMENDATIONS_ANIME_URL = `https://api.jikan.moe/v3/anime/`+`${id}`+ `/recommendations`;
    const response = await fetch(`${RECCOMENDATIONS_ANIME_URL}`);
    const res = await response.json();
    return res.recommendations;
}