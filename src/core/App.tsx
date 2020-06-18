import React from 'react';
import './App.scss'
import styles from './App.scss';
import logo from '../assets/logo.svg'

const App: React.FC = () => (
    <div className={styles.app}>
        Hey there!
        <img src={logo} alt=""/>
        <div className={styles.myImg}/>
    </div>
);

export default App;
