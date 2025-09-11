import React from "react";
import Preloader from "../components/Preloader";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import './Main.css';

class Main extends React.Component {
    state = {
        movies: [],
        gridView: true,
        loading: false,
        type:"all",
        count: 0
    }
    
    layoutViewSw = () => {
        this.setState(prevState => ({ gridView: !prevState.gridView }));
    }

    componentDidMount() {
        // fetch('https://www.omdbapi.com/?apikey=58f24cab&s=Terminator')
        //     .then(response => response.json())
        //     .then(data => this.setState({ movies: data.Search }))
        this.setState({ loading: true })
        fetch(`https://www.omdbapi.com/?apikey=58f24cab&s=Matrix`)
            .then(response => response.json())
            .then
            (
                data => 
                {
                    if(data.Response === "True")this.setState({ movies: data.Search, loading:false, count:data.totalResults});
                    else this.setState({movies:[], loading:false, count:data.totalResults});
                }
            )
    }
    searchMovie = (str, type='all', page) => 
        {
        this.setState({ loading: true })
        fetch(`https://www.omdbapi.com/?apikey=58f24cab&s=${str.trim()}${type !== 'all' ? `&type=${type}` : ''}${`&page=${page}`}`)
            .then(response => response.json())
            .then
            (
                data => 
                {
                    if(data.Response === "True")this.setState({ movies: data.Search, loading:false, count:data.totalResults});
                    else this.setState({movies:[], loading:false, count:data.totalResults});
                }
            )
            //this.setState({loading:false});
    }
    render() {
        return (
            <div className="main">
                <div className="wrap">
                    <button onClick={this.layoutViewSw}>
                        {this.state.gridView ? 'Спииисок' : 'Плииитка'}
                    </button>
                    <Search searchMovie={this.searchMovie} totalCount={this.state.count} />
                    {
                        !this.state.loading && 
                        this.state.movies.length ? <MovieList movies={this.state.movies} gridView={this.state.gridView}/> : <Preloader />
                        //if(!this.state.loading)
                        //  this.state.movies.length ? <MovieList movies={this.state.movies} gridView={this.state.gridView}/> : <Preloader />
                    }
                </div>
            </div>
        )
    }
}
export default Main;