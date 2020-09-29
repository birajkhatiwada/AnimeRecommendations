import React from 'react'

const AnimeCard = (props)=>{
    let isAiring = "";
    if(props.airing == true)
        isAiring = "Airing"
    else
        isAiring = "Completed"

    function handleOnClick(e){
        e.preventDefault();
        window.open(`${props.url}`, "_blank");
    }


    return (
        <div className="anime-card" onClick={handleOnClick}>
            <div className='front' style={
                {backgroundImage: `url(${props.image_url})`}
            }>
                {/* <img src={props.image_url} alt={props.title}></img> */}
            </div>
            <div className="back">
                <h3 className="title">{props.title}</h3>
                <h5 className="airing">Airing: {isAiring}</h5>
                <h5 className="type">Type: {props.type}</h5>
                <h5 className="episodes">Episodes: {props.episodes}</h5>
                <h6 className="synopsis">{props.synopsis}</h6>
            </div>
        </div>
    )
}


export default AnimeCard;