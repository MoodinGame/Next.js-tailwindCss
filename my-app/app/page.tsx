import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
    </>
  );
}