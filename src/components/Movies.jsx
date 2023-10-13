import { Movie } from "./Movie";

export function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => {
                    return <Movie key={movie.imdbID} {...movie} />;
                })
            ) : (
                <h4>Not found</h4>
            )}
        </div>
    );
}
