import React, {useEffect, useState} from 'react';
import Header from './Header';
import SearchBox from './SearchBox'
import AnimeList from './AnimeList'
import {animeCall} from './API'
import './App.css';


function App() {
  const [Anime, setAnime] = useState([]);
  const [searchField, setSearchField] = useState(" ");

  function handleSearch(value){
    setSearchField(value);
  }

  async function handleAnimeCall(){
      console.log(searchField);
      const animes = await animeCall(searchField);
      setAnime(animes);
  }

  useEffect(() => {
      console.log(Anime);
  }, [Anime]);


  return (
    <div className="App">
      {/* <header className="App-header"> */}
          <Header/>
          <SearchBox handleAnimeCall={handleAnimeCall} handleSearch={handleSearch}/>
          <AnimeList animes={Anime}/>
      {/* </header> */}
    </div>
  );
}

export default App;
