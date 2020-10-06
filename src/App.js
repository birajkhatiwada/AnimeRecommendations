import React, {useEffect, useState} from 'react';
import Header from './Header';
import SearchBox from './SearchBox'
import AnimeList from './AnimeList'
import {animeCall, topAiringAnimeCall, topUpcomingAnimeCall, reccomendationsAnimeCall} from './API'
import './App.css';



function App() {
  const [TopUpcomingAnime, setTopUpcomingAnime] = useState([]);
  const [TopAiringAnime, setTopAiringAnime] = useState([]);
  const [Anime, setAnime] = useState([]);
  const [title, setTitle] = useState([]);
  const [searchField, setSearchField] = useState(" ");


  async function topAiringAnimes(){
    const tAA = await topAiringAnimeCall();
    console.log('airing');
    console.log(tAA);
    setTopAiringAnime(tAA);
    setTopUpcomingAnime([]);
  }

  async function topUpcomingAnimes(){
    const tUA = await topUpcomingAnimeCall();
    setTopUpcomingAnime(tUA);
    setTopAiringAnime([]);
  }

  //setAnime to nothing so you can see
  //only topAiring and topUpcoming animes
  function handleHome(){
    setAnime([]);
    setTopAiringAnime([]);
    setTopUpcomingAnime([]);
  }

  async function handleRecommendations(value){
    const recommendedAnime = await reccomendationsAnimeCall(value);
    console.log(recommendedAnime);
    if(recommendedAnime.length == 0)
      console.log("no recommendation");
    else
      setAnime(recommendedAnime);
  }

  async function handleAnimeCall(value){
    console.log(value);
    const animes = await animeCall(value);
    setTitle(value);
    setAnime(animes);
    setTopAiringAnime([]);
    setTopUpcomingAnime([]);
  }

  useEffect(() => {
      console.log(Anime);
  }, [Anime]);

  useEffect(()=>{
    // topAiringAnimes();
    // topUpcomingAnimes();
  },[])

  console.log(Anime.length);

  return (
    <div className="App">
          <div className="header-search">
            <Header handleHome={handleHome} handleAnimeCall={handleAnimeCall}
              handleTopAiringAnime={topAiringAnimes} handleTopUpcomingAnime={topUpcomingAnimes}/>
          </div>
          <div className="upcoming-anime" style={{
            display: TopUpcomingAnime.length===0 ? "none": "block"
              }}>
            {/* <h3 className="topAnimes">Top Upcoming Animes</h3> */}
            <AnimeList animes={TopUpcomingAnime} handleReccomendations={handleRecommendations}></AnimeList>
          </div>
          <div className="airing-anime" style={{
            display: TopAiringAnime.length===0? "none": "block"
            }}>
            {/* <h3 className="topAnimes">Top Airing Animes</h3> */}
            <AnimeList animes={TopAiringAnime} handleReccomendations={handleRecommendations}></AnimeList>
          </div>
          <div style={{
            display: Anime.length===0? "none": "block"
            }}>
            {/* <h3 className="topAnimes">{title}</h3> */}
            <AnimeList animes={Anime} handleReccomendations={handleRecommendations}/>
          </div>
    </div>
  );
}

export default App;
