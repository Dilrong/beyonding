import { Link } from "gatsby";
import * as React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="hidden w-full lg:flex lg:w-auto">
      <ul className="flex">
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
