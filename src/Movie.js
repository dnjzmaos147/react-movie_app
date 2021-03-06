import React from 'react';
import "./Movie.css";


function Movie({id, year, title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} />
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary}</p>
            <ul className="genres">
                {genres.map((genre, index) => (
                <li key={index} className="genres_genre">{genre}</li>))}
            </ul>
        </div>
    </div>
}

export default Movie;