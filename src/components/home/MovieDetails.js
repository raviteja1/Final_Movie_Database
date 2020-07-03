import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSingleMovie,setLoading} from '../../actions/searchActions'
import { Link } from 'react-router-dom';

export class MovieDetails extends Component {
  componentDidMount(){
    this.props.fetchSingleMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const {movie}=this.props;

    return (
      <div>
      <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
            <a
  href={'https://www.imdb.com/title/'+movie.imdbID}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
  style={{backgroundColor:'#070400',color:'#FF9900'}}><strong>View On IMDB</strong>
  </a>
  <Link
  to="/"
  className="btn btn-default"
  style={{backgroundColor:'#070400',color:'#FF9900'}}><strong>Go Back To Search</strong>
  </Link>
          </div>
          <div className="col-md-8">
            <h2 className="mb-4" style={{backgroundColor: '#070400',color:'#FF9900'}}>{movie.Title}</h2>
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
              <li className="list-group-item">
                <strong>Movie Plot:</strong> {movie.Plot}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">

  <hr/>
  
 
</div>

        </div>

    )
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie

});

export default connect(mapStateToProps,{fetchSingleMovie,setLoading})(MovieDetails);
