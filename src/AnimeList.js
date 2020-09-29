import React from 'react'
import AnimeCard from './AnimeCard'

const AnimeList = (props)=>{
    return (
        <div className="anime-list">
            {
                props.animes.map((anime, i)=>{
                    return <AnimeCard
                        key={i}
                        airing={anime.airing}
                        end_date={anime.end_date}
                        episodes={anime.episodes}
                        image_url={anime.image_url}
                        rated={anime.rated}
                        score={anime.score}
                        start_date={anime.start_date}
                        synopsis={anime.synopsis}
                        title={anime.title}
                        type={anime.type}
                        url={anime.url}
                    />
                })
            }
        </div>
    )
}


export default AnimeList;