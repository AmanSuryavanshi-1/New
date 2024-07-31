import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/ASlogo.png';
import { LiaInfoSolid } from "react-icons/lia";
import { LuLogIn } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';

const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const navLinks = [
    { title: 'Home', url: '/', icon: <AiOutlineHome className="w-5 h-5" /> },
    { title: 'About', url: '/about', icon: <LiaInfoSolid className="w-5 h-5" /> },
    { title: 'Contact', url: '/contact', icon: <IoCallOutline className="w-5 h-5" /> },
    { title: 'Take Notes', url: '/notes', icon: <CgNotes className="w-5 h-5" /> },
  ];

  return (
    <nav className="font-sans shadow-md bg-primary-bgColor">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <Link to="/" className="flex items-center">
          <img className="w-16 h-16" loading="eager" src={mainLogo} alt="Logo" />
        </Link>

        {!isMobile ? (
          <div className="flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.url} className="flex items-center transition-colors duration-200 text-primary-light hover:text-primary-yellow">
                {link.icon}
                <span className="ml-1">{link.title}</span>
              </Link>
            ))}
            <Link
              to="/auth"
              onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
              className="flex items-center transition-colors duration-200 text-primary-light hover:text-primary-yellow"
            >
              {btnName === "Login" ? <LuLogIn className="w-5 h-5" /> : <CiLogout className="w-5 h-5" />}
              <span className="ml-1">{btnName}</span>
            </Link>
          </div>
        ) : (
          <button onClick={toggleModal} className="transition-colors duration-200 text-primary-light hover:text-primary-yellow">
            <FaBars className="w-6 h-6" />
          </button>
        )}
      </div>


      {/* Mobile Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-4/5 max-w-md p-6 rounded-lg shadow-xl bg-primary-bgColor">
            <div className="flex justify-end mb-4">
              <button onClick={toggleModal} className="transition-colors duration-200 text-primary-light hover:text-primary-yellow">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="flex items-center transition-colors duration-200 text-primary-light hover:text-primary-yellow"
                  onClick={toggleModal}
                >
                  {link.icon}
                  <span className="ml-2">{link.title}</span>
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => {
                  setBtnName(btnName === "Login" ? "Logout" : "Login");
                  toggleModal();
                }}
                className="flex items-center transition-colors duration-200 text-primary-light hover:text-primary-yellow"
              >
                {btnName === "Login" ? <LuLogIn className="w-5 h-5" /> : <CiLogout className="w-5 h-5" />}
                <span className="ml-2">{btnName}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;