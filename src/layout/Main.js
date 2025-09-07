import React from "react";
import Preloader from "../components/Preloader";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import './Main.css';

class Main extends React.Component {
    state = { movies: [] }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=58f24cab&s=Terminator')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    searchMovie = (str) =>
    {
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=58f24cab&s=${str.trim()}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }
    render() {
        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMovie={this.searchMovie}/>
                    {
                        this.state.movies.length ? <MovieList movies={this.state.movies} /> : <Preloader />
                    }
                </div>
            </div>
        )
    }
}
export default Main;