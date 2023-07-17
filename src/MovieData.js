const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
];

export function MovieList() {
    return(
        <div class="movieContainer">
            <h1>Movie List</h1>
            {movies.map((movie) => ( // js map method
                <div key="movie.title">{movie.title}</div>
            ))}
        </div>
    );
}
