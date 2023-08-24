import * as React from "react";
import Navbar from "./Navbar";
import { graphql, useStaticQuery } from "gatsby";

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header>
      <nav className=" text-neutral-50 px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a>
            <h1 className="text-xl">{data.site.siteMetadata.title}</h1>
          </a>
          <div className="flex items-center"></div>
          <Navbar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
