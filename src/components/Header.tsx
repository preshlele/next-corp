import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-start justify-between mx-auto  p-8">
        <Link href="/" className="font-bold text-2xl ">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/scale">Scale</Link>
          <Link href="performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
