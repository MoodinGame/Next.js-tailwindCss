import Link from "next/link";
import React from "react";

const InfoPage = () => {
  return (
    <div>
      <nav>
        <div className="flex gap-4 text-2xl">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/camp"}>Camp</Link>
        </div>
      </nav>
      InfoPage
    </div>
  );
};

export default InfoPage;
