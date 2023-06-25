import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

const App = () => {
    return (
        <div>
        <Navbar />
        <Home />
        <Main />
        <Footer />
        </div>
    );
    }

export default App;
