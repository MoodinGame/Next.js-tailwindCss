import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <nav className="bg-base-100 shadow-lg p-4">
        <div className="flex gap-4 text-xl font-semibold">
          <Link href={"/"} className="btn btn-ghost hover:btn-primary">
            Home
          </Link>
          <Link href={"/about"} className="btn btn-ghost hover:btn-primary">
            About
          </Link>
          <Link href={"/camp"} className="btn btn-ghost hover:btn-primary">
            Camp
          </Link>
        </div>
      </nav>
      AboutPage
    </div>
  );
};

export default AboutPage;
