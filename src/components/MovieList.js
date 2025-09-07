import Movie from './Movie';
import './Movie.css';

function MovieList(props) {
    const { movies = [] } = props;
    console.log(movies);
    return (
        <div className='movies'>
            {
                movies.map
                    (

                        movie => {
                            return <Movie key={movie.imdbID} {...movie} />
                        }
                    )
            }
        </div>
    )
}
export default MovieList;