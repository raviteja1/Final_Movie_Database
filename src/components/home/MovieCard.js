import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import BoycottChinese from './BackCard.jpg';
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
    <BackSide style={{ width: '361px', height: '404px' }}>
    <div className="col-md-12 mb-5">
          <div className="text-center" style={{backgroundColor:'#070400', width: '300px', height: '390px'}}>
            <img className="" src={BoycottChinese} alt="Movie Cover" style={{ width: '300px', height: '300px' }} />
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

      );
    }
  }
  
  export default MovieCard;