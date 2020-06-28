import {SEARCH_MOVIE} from './types';
import axios from 'axios';
import {ApiKey} from '../ApiKey';
import {FETCH_MOVIES} from './types';
import {FETCH_SINGLE_MOVIE,LOADING} from './types';

 export const searchMovie=(text)=>dispatch =>{
    dispatch({
        type:SEARCH_MOVIE,
        payload:text,
    });
};

export const fetchMovies=(text)=>dispatch=>{
axios.get(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${text}`)
.then(response=>
    dispatch({
    type:FETCH_MOVIES,
    payload:response.data
}))
.catch(err=>console.log(err));
}



export const fetchSingleMovie=(id)=>dispatch=>{
    axios.get(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${id}`)
    .then(response=>
        dispatch({
        type:FETCH_SINGLE_MOVIE,
        payload:response.data
    }))
    .catch(err=>console.log(err));
    }

    export const setLoading=()=>{
        return{
            type:LOADING
        };
        }

