import React from 'react';
import Utama from './Components/utama'
import { Link } from 'react-router-dom'

class App extends React.Component {
  /**render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light position-fixed">
          <h1 class="navbar-brand">Adiwiyata</h1>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/">Beranda</Link>
              </li>
              <li class="nav-item">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li class="nav-item  ">
                <Link to="/haribesar">Hari Besar</Link>
              </li>
              <li class="nav-item ">
                <Link to="/list">List</Link>              
              </li>
              <li class="nav-item  ">
                <Link to="/agenda">Agenda</Link>              
              </li>
              <li class="nav-item   ">
                <Link to="/toko">Toko</Link>              
              </li>
            </ul>
          </div>
        </nav>
        
        <Utama/>

      </div>
    )
  }*/
  render(){
    return(
      <div className="container">
        <div className='navbar navbar-expand-lg bg-primary navbar-light'>
            <a className="navbar-brand" href="#">
                Adiwiyata
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Beranda</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list" className="nav-link">List</Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="/agenda" className="nav-link">Agenda</Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="/toko" className="nav-link">Toko</Link>
                    </li>
                </ul>
            </div>
        </div>
        <Utama/>
      </div>
        
    )
}
}



export default App;
