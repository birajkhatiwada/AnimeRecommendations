import React, {useState} from 'react'
import SearchBox from './SearchBox'


const Header = (props)=>{
    const [searchField, setSearchField] = useState(" ");

    function handleHome(){
        props.handleHome();
    }

    function handleAnimeCall(){
        props.handleAnimeCall(searchField);
    }

    function handleSearch(value){
        setSearchField(value);
    }

    function handleTopAiringAnime(){
        props.handleTopAiringAnime();
    }

    function handleTopUpcomingAnime(){
        props.handleTopUpcomingAnime();
    }

    return(
        <header className="App-header-container">
            <div className="app-header-guide">
                <h1 onClick={handleHome} className="anime-search app-header">Animes</h1>
                <h1 onClick={handleTopAiringAnime} className="top-airing-anime app-header">TopAiring Animes</h1>
                <h1 onClick={handleTopUpcomingAnime} className="top-upcoming-anime app-header">TopUpcoming Animes</h1>
            </div>
            <SearchBox className="search-box" handleAnimeCall={handleAnimeCall} handleSearch={handleSearch}/>
        </header>
    )
}

export default Header;