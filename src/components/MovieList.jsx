const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container col justify-content-start m-3">
                    <img src={movie.Poster} alt="movie" />
                    <div onClick = {() => props.handleFavouritesClick(movie)}
                        className="overlay align-items-center justify-content-center">
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList;