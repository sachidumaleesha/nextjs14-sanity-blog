import Link from "next/link";
import { ModeToggle } from "./ModeToogle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        Tech<span className="text-blue-500">Stack</span>
      </Link>
      <ModeToggle/>
    </nav>
  );
}
