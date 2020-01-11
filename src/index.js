import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route}from 'react-router-dom';
import './index.scss';
import Portfolio from './page/Portfolio';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div className='app'>
        <Portfolio />
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();