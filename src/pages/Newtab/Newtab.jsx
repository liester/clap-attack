import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Newtab/Newtab.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <h6>The color of this paragraph is defined using SASS.</h6>
        <code>
          {/*This is the good stuff.  It seems to make the "click" on clap do the thing.  Without the mouse up it just claps indefinitely*/}
          var clickEvent = document.createEvent ('MouseEvents');
          clickEvent.initEvent ('mousedown', true, true);
          $0.dispatchEvent (clickEvent);
          clickEvent.initEvent ('mouseup', true,true);
          $0.dispatchEvent (clickEvent);
        </code>
      </header>
    </div>
  );
};

export default Newtab;
