/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Logo from './images/gandaBeef.png'
import Beef1 from './images/beef-1.jpg'
import Beef3 from './images/beef-3.jpg'
import Beef2 from './images/beef-2.jpeg'
import Beef5 from './images/beef-5.jpg'
import Beef6 from './images/beef-6.jpg'

function App() {
  return (
    <div>
      <div className="App-header">
      <div style={{paddingTop:5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20}}>
      <div className="ui inverted secondary menu">
        <div className="menu">
          <a className="item">
            <img src={Logo} style={{height:50, width:170}}/>
          </a>
          </div>
          <div className="right menu">
            <a className="active item">Beranda</a>
            <a className="item">Tentang Kami</a>
            <a className="item">Kontak</a>
        </div>
      </div>
      </div>
      <div style={{position: 'absolute',textAlign: 'left', width: 500, left: 100, top: 200, margin: 'auto'}}>
        <h1 style={{fontFamily: 'Rowdies'}}>Lorem Ipsum is simply dummy</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
        </p>
        <button className="ui yellow button">
          Pesan Sekarang
        </button>
      </div>  
      </div>
      <div style={{marginTop: 10, marginLeft: 250, marginRight: 250}}>
      <div className="ui grid">
        <div className="eight wide column">
          <div className="image">
            <img className="ui fluid image" src={Beef1} />
          </div>
        </div>
        <div className="five wide column">
          <div className="content">
          <h2 className="header">Lorem Ipsum is simply </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="meta">
        <i class="dollar sign icon"></i><span>5.22</span>
        </div>
          </div>
        </div>
        <div className="three wide column">
          <div className="row" style={{marginBottom: 10}}>
            <div className="eight wide column">
              <div className="image">
                <img className="ui fluid image" src={Beef2} />
              </div>
            </div>
          </div>
          <div className="row" style={{marginBottom: 10}}>
            <div className="eight wide column">
              <div className="image">
                <img className="ui fluid image" src={Beef3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div style={{marginTop: 10}}>
      <div style={{marginRight: 250, marginLeft: 250}}>
        <h2 className="header" style={{textDecoration: 'underline'}}>Favorite</h2>
        <div className="ui grid">
          <div className="eight wide column">
            <div className="content"></div>
              <div className="image">
                <img className="ui fluid image" src={Beef5} alt="beef5" style={{height: 300}}/>
              </div>
              <div className="content">
                <h3 className="header">Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="meta">
                  <i class="dollar sign icon"></i><span>3.22</span>
                </div>
                <button className="ui yellow button" style={{marginTop: 10}}>Beli</button>
              </div>
            </div>
          <div className="eight wide column">
          <div className="image">
                <img className="ui fluid image" src={Beef6} alt="beef6" style={{height: 300}} />
              </div>
              <div className="content">
                <h3 className="header">Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="meta">
                  <i class="dollar sign icon"></i><span>7.02</span>
                </div>
                <button className="ui yellow button" style={{marginTop: 10}}>Beli</button>
              </div>
          </div>
          </div>
          </div>
        </div>
        <div style={{marginTop: 10, backgroundColor: '#e0e0e0'}}>
        <div style={{marginRight: 250, marginLeft: 250}}>
        <h2 className="header" style={{textDecoration: 'underline'}}>Paling Dicari</h2>
          <div className="ui grid">
            <div className="four wide column">
            <div className="image">
                <img className="ui fluid image" src={Beef6} alt="beef6" style={{height:150}}/>
              </div>
              <div className="content">
                <h3 className="header">Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="meta">
                  <i class="dollar sign icon"></i><span>6.12</span>
                </div>
                <button className="ui yellow button" style={{marginTop: 10}}>Beli</button>
              </div>
            </div>
            <div className="four wide column">
            <div className="image">
                <img className="ui fluid image" src={Beef3} alt="beef6" style={{height:150}}/>
              </div>
              <div className="content">
                <h3 className="header">Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="meta">
                  <i class="dollar sign icon"></i><span>9.09</span>
                </div>
                <button className="ui yellow button" style={{marginTop: 10}}>Beli</button>
              </div>
            </div>
            <div className="four wide column">
            <div className="image">
                <img className="ui fluid image" src={Beef5} alt="beef6" style={{height:150}}/>
              </div>
              <div className="content">
                <h3 className="header">Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="meta">
                  <i class="dollar sign icon"></i><span>3.00</span>
                </div>
                <button className="ui yellow button" style={{marginTop: 10}}>Beli</button>
              </div>
            </div>
            <div className="four wide column">
            <div className="image">
                <img className="ui fluid image" src={Beef1} alt="beef6" style={{height:150}}/>
              </div>
              <div className="content">
                <h3 className="header">Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="meta">
                  <i class="dollar sign icon"></i><span>4.22</span>
                </div>
                <button className="ui yellow button" style={{marginTop: 10}}>Beli</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style={{paddingInline: 250, paddingTop: 100, paddingBottom: 100}}>
          <div className="ui grid">
            <div className="four wide column">
            <div className="content">
            <h4 className="header">Lorem ipsum</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
            </div>
            <div className="four wide column">
            <div className="content">
            <h4 className="header">Lorem ipsum is simply</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
            </div>
            <div className="four wide column">
            <div className="content">
            <h4 className="header">Lorem ipsum</h4>
            <ul>
              <li>simply dummy</li>
              <li>simply text of the printing</li>
              <li>typesetting industry</li>
            </ul>
          </div>
            </div>
            <div className="four wide column">
            <h4 className="header">Media Sosial Kami</h4>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <div style={{color: 'white', backgroundColor: 'black', textAlign: 'center', padding: 20}}>
          <p>&#169;GandaBeef</p>
        </div>
        </div>
  );
}

export default App;
