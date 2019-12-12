import React from 'react';
import {Route} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.scss'

export default function App() {
    return (
        <>
            <Portfolio />
            <Route path="/contact">
                <Contact />
            </Route>
        </>
    );
}