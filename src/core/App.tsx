import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from "./store";

import styles from './App.scss';
import logo from '../assets/logo.svg'

const App: React.FC = () => (
    <Provider store={store}>
        <Router>
            <div className={styles.app}>
                Hey there!
                <img src={logo} alt=""/>
                <div className={styles.myImg}/>
            </div>
        </Router>
    </Provider>
);

export default App;
