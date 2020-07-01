import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import './App.scss';

export class MovieCard extends Component {
  

    render() {
      
      const { movie } = this.props;
      return (
        
        <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    //style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      // style={{
      //   backgroundColor: '#41669d',
      // }}
      style={{ width: '361px', height: '404px'}}
    >
      <div className="col-md-12 mb-5" >
          <div className="text-center" style={{backgroundColor:'#070400', width: '300px', height: '390px' }}>
            <img className="" src={movie.Poster} alt="Movie Cover" style={{ width: '300px', height: '300px'}} />
            <h5 className="text-light card-title">
              {movie.Title} - {movie.Year}
            </h5>
          
            <Link to={'/movie/'+movie.imdbID} className="btn btn-primary"
            style={{backgroundColor:'#FF9900',color:'black'}}><strong>Movie Details</strong></Link>
             {/* <i className="fas fa-chevron-right"></i> */}
          </div>
        </div>
    </FrontSide>
    <BackSide style={{ width: '300px', height: '402px' }}>
    <div className="col-md-12 mb-5">
          <div className="text-center" style={{backgroundColor:'#070400', width: '230px', height: '390px'}}>
            <img className="" src={movie.Poster} alt="Movie Cover" style={{ width: '230px', height: '300px' }} />
            <h5 className="text-light card-title">
              {movie.Title} - {movie.Year}
            </h5>
          
            <Link to={'/movie/'+movie.imdbID} className="btn btn-primary" 
            style={{backgroundColor:'#FF9900',color:'black'}}><strong>Movie Details</strong></Link>
             {/* <i className="fas fa-chevron-right"></i> */}
          </div>
        </div>
    </BackSide>
  </Flippy>
        
        
        //{/* <div className="artboard">
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

      );
    }
  }
  
  export default MovieCard;