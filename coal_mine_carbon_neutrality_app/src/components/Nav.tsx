"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react"; // For authentication

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession(); // For checking user session

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-700 text-white p-4 shadow-md w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-2xl font-bold">
            FarmChain
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/features" className="hover:text-gray-300">
            Features
          </Link>

          {session ? (
            <>
              {/* <Link href="/dashboard/buyer" className="hover:text-gray-300">
                Buyer
              </Link>
              <Link href="/dashboard/farmer" className="hover:text-gray-300">
                Farmer
              </Link> */}

              <button onClick={() => signOut()} className="hover:text-gray-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" className="hover:text-gray-300">
                Login
              </Link>
              <Link href="/signup" className="hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-4 bg-green-600">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/features" className="hover:text-gray-300">
            Features
          </Link>

          {session ? (
            <>
              {/* <Link href="/dashboard/buyer" className="hover:text-gray-300">
                Buyer
              </Link>
              <Link href="/dashboard/farmer" className="hover:text-gray-300">
                Farmer
              </Link> */}
              <button onClick={() => signOut()} className="hover:text-gray-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link href="/signup" className="hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
