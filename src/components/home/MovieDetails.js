import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSingleMovie,setLoading} from '../../actions/searchActions'

export class MovieDetails extends Component {
  componentDidMount(){
    this.props.fetchSingleMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const {movie}=this.props;

    return (
      <React.Fragment>
      <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie

});

export default connect(mapStateToProps,{fetchSingleMovie,setLoading})(MovieDetails);
