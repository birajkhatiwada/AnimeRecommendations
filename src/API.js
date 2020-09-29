const API_URL = 'https://api.jikan.moe/v3/search/anime?q=';

export async function animeCall(searchField){
    console.log('Inside');
    const response = await fetch(`${API_URL}`+`${searchField}`);
    const res = await response.json();
    return res.results;
}
