import { useEffect, useState } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((data) => setMovies(data.search), setLoading(false))
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [movies, loading]);

    const searchMovie = (search, type) => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) => setMovies(data.search), setLoading(true))
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <main className='container content'>
            <Search searchMovie={searchMovie} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
}
