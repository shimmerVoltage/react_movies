import Movie from './Movie';
import './MovieList.css';
import './Movie.css';

function MovieList(props) {
    const { movies = [], gridView } = props;
    console.log(movies);
    return (
        <div className={`movies ${gridView ? 'grid-view' : 'list-view'}`}>
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