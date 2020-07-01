import React, { Component } from 'react';
 import {searchMovie} from '../../actions/searchActions';
import { connect } from 'react-redux';
import {fetchMovies,setLoading} from '../../actions/searchActions';
//import { Link } from 'react-router-dom';
import Logo from './WebsiteLogo.png';
 




export class SearchForm extends Component {


    onChange = e => {
        console.log(e.target.value);
        this.props.searchMovie(e.target.value);
        this.props.setLoading();
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.props.text);
        this.props.fetchMovies(this.props.text);
    };
    render() {
        return (
            <div className="jumbotron mt-5 text-center">
                <div className="container">
                <img className="webSiteLogo"src={Logo} alt=""/>
                <b id="emailHelp" className="form-text text-muted text-dark">World of movies and Series at a single Click</b>
                    <form id="searchForm" onSubmit={this.onSubmit}>

                        {/* <input type="text" className="form-control" placeholder="Come on Folks start Your Search" name="searchText"
                            onChange={this.onChange} />
                        <button type="submit" className="btn btn-primary btn-bg mt-3"> SEARCH</button>
                        <small id="emailHelp" className="form-text text-muted">World of movies and Series at a single Click</small> */}
                        
                        
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Come on Folks start Your Search...." onChange={this.onChange}/>
          <button type="submit" className="search_icon"><i className="fa fa-search"/></button>
          
        
      </div>
      </div>
      </form>
      </div>
      </div>               

           
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie, fetchMovies,setLoading })(SearchForm);
