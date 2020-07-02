import React from 'react'

function Footer() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#070b14'}}>
        <div className="container">
        <div className="row">
            <div className="col-md-12">
<div className="footer p-3 mt-4 text-center text-light" style={{backgroundColor: '#070b14'}}>
    <span>Developed By</span>&nbsp;

<span className="text-warning font-weight-bold text-warning">Raviteja Thoudishetty</span>
,Using
<i className="fab fa-react"/>React Js &amp;Redux Js Integrated with external Movies Data API
&nbsp;<br/>
<span> For Covid related Data Please click on adjacent Link</span>
&nbsp;<a href="https://ravitejathoudishetty.herokuapp.com" target="_blank" className="text-warning font-weight-bold text-warning">
    Covid Live Data</a>
</div>
            </div>
        </div>
        </div>
        </nav>
        </div>
    )
}

export default Footer;
