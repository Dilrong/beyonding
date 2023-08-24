import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="bg-neutral-950 h-max">
      <Header />
      <main className="flex min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
