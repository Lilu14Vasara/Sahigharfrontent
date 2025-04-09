import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    console.log("Retrieved role from localStorage:", role);
    setIsLoggedIn(!!token);
    setUserRole(role ? role.trim() : "");
  }, []);

  useEffect(() => {
    console.log("User Role:", userRole);
    console.log("Is Logged In:", isLoggedIn);
  }, [userRole, isLoggedIn]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUserRole("");
    setIsLoggedIn(false);
    window.location.reload(); 
    window.location.href = "/login"; 
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Sahi<span className="text-yellow-500">Ghar</span>
        </Link>

        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-white">
            <i className="fas fa-bars text-2xl">≡</i>
          </button>
        </div>

        <nav>
          <ul className={`lg:flex lg:space-x-8 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
            <li><Link to="/" className="block px-4 py-2 hover:text-yellow-500">Home</Link></li>
            <li><Link to="/Feature" className="block px-4 py-2 hover:text-yellow-500">Features</Link></li>
            <li><Link to="/Pricing" className="block px-4 py-2 hover:text-yellow-500">Pricing</Link></li>
            <li><Link to="/About" className="block px-4 py-2 hover:text-yellow-500">About</Link></li>
            <li><Link to="/Contact" className="block px-4 py-2 hover:text-yellow-500">Contact</Link></li>
           
            
            {isLoggedIn && userRole?.trim() === "landlord" && (
              <li>
                <Link
                  to="/landlord/dashboard"
                  className=" block px-4 py-2 bg-green-400 rounded hover:bg-green-300"
                >
                  Add New Property
                </Link>
              </li>
            )}

          {isLoggedIn && userRole?.trim() === "tenant" && (
              <li>
                <Link
                  to="/tenant/dashboard"
                  className=" block px-4 py-2 bg-green-400 rounded hover:bg-green-300"
                >
                  View Property
                </Link>
              </li>
            )}

            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 bg-red-500 rounded text-white hover:bg-red-400"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/Login" className="block px-4 py-2 bg-yellow-500 rounded text-white hover:bg-yellow-400">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
