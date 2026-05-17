import Header from './Header';
import Login from './Login';
import bgpic from "../assets/bg.jpg";

const Body = () => {
    return (
        <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgpic})` }}>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            <Header />

            <div className="flex justify-center items-center min-h-screen">
                <Login />
            </div>

        </div>
    );
}

export default Body;
