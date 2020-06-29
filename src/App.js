import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
//import SearchForm from './components/home/SearchForm';
import {Route} from 'react-router-dom';
import Landing from './components/home/Landing';
import MovieDetails from './components/home/MovieDetails';
//import {HashRouter as Router} from 'react-router-dom';
import './App.css';




class App extends React.Component {
    render() {
        return (
            
             <div>   
            <Navbar />
            <Route exact path="/" component={Landing}/>
            <Route exact path="/movie/:id" component={MovieDetails}/>
            <Footer />
            </div>
            
        )
    }
}
export default App;