import Logo from '../assets/logo.png';
const Header = () => {
    return (
        <div className="flex justify-between items-center px-30 absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent py-4">

            <img className="h-35" src={Logo} alt="Logo" />

            <div className="flex gap-8 items-center">

                <select className="bg-black text-white px-4  py-1 rounded border-1 p-5 border-white">
                    <option>Hindi</option>
                    <option>English</option>
                </select>

                <button className="bg-red-600 text-white px-4 py-1 rounded">
                    Sign In
                </button>

            </div>

        </div>
    );
}

export default Header;