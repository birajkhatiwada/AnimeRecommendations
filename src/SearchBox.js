import React from 'react'

const SearchBox = (props)=>{

    return(
        <div className="search-area">
            <form action="">
                <input className="search-input" type="text" placeholder="search"
                    onChange={(e)=>{
                        props.handleSearch(e.target.value);
                    }}/>
                <button className="search-button" onClick={(event)=>{
                    event.preventDefault();
                    props.handleAnimeCall();
                }}>Search</button>
            </form>
        </div>
    )
}

export default SearchBox;