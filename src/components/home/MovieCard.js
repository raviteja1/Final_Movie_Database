import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './App.scss';

export class MovieCard extends Component {
    render() {
      const { movie } = this.props;
      return (
        // <React.Fragment>
        <div className="col-md-3 mb-5">
          <div className="card card-body bg-dark mb-3 text-center h-100">
            <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
            <h5 className="text-light card-title">
              {movie.Title} - {movie.Year}
            </h5>
            
            <Link to={'/movie/'+movie.imdbID} className="btn btn-primary">Movie Details</Link>
             <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      //   {/* <div className="artboard">
      //   <div className="card">
       
      //    <div className="card__side card__side--back">
      //     <div className="card__cover">
      //      <h4 className="card__heading">
      //       <span className="card__heading-span">Skill Set</span>
      //      </h4>
      //     </div>
      //     <div className="card__details">
      //      <ul>
      //       <li>Advanced JS and CSS</li>
      //       <li>JS/CSS Preprocessors</li>
      //       <a href={"www.google.com"} className="btn btn-primary">Movie Details</a>
      //       <li>JS Frameworks</li>
      //       <li>Advanced Animations</li>
      //       <li>Deployment Pipelines</li>
      //       <li>Large Apps Architectures</li>
      //       <li>Naming Conventions</li>
      //      </ul>
      //     </div>
      //    </div>
       
      //    <div className="card__side card__side--front">
      //     <div className="card__theme">
      //      <div className="card__theme-box">
      //      <img className="card__subject" src={movie.Poster} alt="Movie Cover" />
      //       <p className="card__title">Hello World!</p>
      //      </div>
      //     </div>
      //    </div>
       
      //   </div> */}
      //  {/* </div> */}
      // //  </React.Fragment>
      );
    }
  }
  
  export default MovieCard;