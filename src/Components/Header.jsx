import Logo from '../assets/logo.png';
const Header = () => {
    return (
        <div className="flex justify-between items-center px-5">

            <img className="h-25" src={Logo} alt="Logo" />

            <div className="flex gap-5 items-center">

                <select className="bg-black text-white px-2 py-1 rounded border-1 p-5 border-white">
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