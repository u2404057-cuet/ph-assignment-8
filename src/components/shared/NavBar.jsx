import Link from "next/link";
import { ShoppingCart } from "@gravity-ui/icons";

const links = (
  <>
    <li>
      <Link href={"/"}>Home</Link>
    </li>
    <li>
      <Link href={"/products"}>Products</Link>
    </li>
    <li>
      <Link href={"/profile"}>Profile</Link>
    </li>
  </>
);

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-extrabold text-4xl">
          SunCart
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        <div className="relative">
          <div className="absolute -top-2 -right-2 hidden">
            <p className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white">
              1
            </p>
          </div>
          <ShoppingCart className="w-7 h-7"></ShoppingCart>
        </div>
        <Link
          href={"/login"}
          className="btn bg-linear-to-r from-red-400 to-orange-400 text-white"
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className="btn border-2 bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
