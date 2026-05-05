import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

const Body = () => {
    return (
        <div>
            <Header />
            <Login />
            <div>Body Page</div>
            <Footer />
        </div>  
    );
}

export default Body;