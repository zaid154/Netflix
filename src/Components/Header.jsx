import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-30 absolute top-0 left-0 w-full bg-linear-to-b from-black to-transparent">

      <img className="h-35" src={Logo} alt="Logo" />

      <div className="flex gap-8 items-center">

        <select className="bg-black text-white px-4 py-1 rounded border border-white">
          <option>Hindi</option>
          <option>English</option>
        </select>

        <Link
          to="/signin"
          className="bg-red-600 text-white px-4 py-1 rounded"
        >
          Sign In
        </Link>

      </div>

    </div>
  );
};

export default Header;