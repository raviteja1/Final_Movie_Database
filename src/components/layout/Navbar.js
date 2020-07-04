import React from 'react';
import Soldier from './Soldier.jpg';

function Navbar() {
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#070b14'}}>
  <a className="navbar-brand text-warning" href="Home" >Home</a>
  <a href="https://ravitejathoudishetty.herokuapp.com" target="_blank" className="text-warning font-weight-bold text-warning">
    Covid Live Data</a>
    <div class="col-md-10 text-right">
    <img src={Soldier} className="Soldier" alt="Poster"/></div>
    {/* //<<img src="Soldier"></img> */}
</nav>

    </div>

  )
}

export default Navbar;
