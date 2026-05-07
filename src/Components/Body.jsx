import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

const Body = () => {
    return (
        <div
            className=" justify-center text-center bg-[url('https://www.cantechletter.com/wp-content/uploads/Netflix.jpg')] bg-cover bg-center min-h-screen w-3/12 opacity-1 li"
        >
            <Header />
            {/* <Login />
            <div>Body Page</div>
            <Footer /> */}
        </div>
    );
}

export default Body;