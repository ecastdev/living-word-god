
import { Menu, X } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import logos from "./assests/ll.png";
import { Divider } from "@mui/material";

export default function Navbar1() {
  // Navigation links
  const nav = [
    {
      listName: 'Home',
      label: ""
    },
    {
      listName: 'Services',
      label: "service"
    },
    {
      listName: 'About',
      label: 'about'
    },
    {
      listName: 'Volunteer', // Fixed the typo 'Volunterer' to 'Volunteer'
      label: 'volunteer' // Changed 'volunt' to 'volunteer' for consistency
    },
    {
      listName: 'Contact us',
      label: 'contact'
    },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Move state outside of the toggle function

  const toggleNav = () => {
    setMobileOpen(!mobileOpen);
  };

  const clickLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="fixed  shadow-lg shadow-rose-500 z-50 top-0 w-full py-3 h-24 bg-blue-900 rounded-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-16 w-16 lg:h-10 lg:w-10 mr-2" src={logos} alt="logo" />
            <h1 className="text-center text-white font-title text-xs lg:text-xl ">
              Living Word of God Faith-Based Organisation
            </h1>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {nav.map((item, index) => (
              <li
                key={index}
               className="mt-8"
              >
                <Link
                  to={item.label}
                  className={` text-blue-200 text-md hover:bg-gradient-to-r from-rose-200 to-blue-200 hover:text-red-950 p-3 rounded-lg ${activeLink === item.label ? 'bg-violet-300 text-rose-950 border-b-2' : ''}`}
                  onClick={() => clickLink(item.label)}
                >
                  {item.listName}
                </Link>
              </li>
            ))}
            <Link to='donate'>
              <button className="bg-red-800 text-blue-400 p-4 hover:bg-white hover:text-rose-900 rounded-lg">
                Donate
              </button>
            </Link>
          </ul>
        </div>
        {/* mobile open */}
          <div className="bg-blue-900 w-screen lg:hidden h-10 flex items-center gap-10 justify-center">

            <button onClick={toggleNav} className=" hover:bg-white bg-gradient-to-r from-blue-100 to-slate-400">
              {mobileOpen ? <X color='primary' /> : <Menu color="primary" />}
            </button>
            <Link to='donate'>
              <button className="bg-red-800 text-blue-400 p-2 hover:bg-white hover:text-rose-900 rounded-lg">
                Donate
              </button>
            </Link>
          </div>


        {mobileOpen && (
          <div className="fixed  lg:right-0 z-20 bg-blue-100 w-screen lg:w-full lg:p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {nav.map((item, index) => (
                <li key={index} className="py-2">
                  <Divider/>
                  <li className="bg-white w-96 h-px"></li>
                  <Link
                    to={item.label}
                    className=" ml-32 text-center  text-xl "
                    onClick={() => clickLink(item.label)}
                  >
                    {item.listName}
                  </Link>
                </li>
                
              ))}
            
              
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
  }
