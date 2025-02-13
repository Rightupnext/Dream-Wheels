import { useState, useEffect } from "react";

export default function NavbarSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-button")) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="stiky top-0 left-0 right-0 z-0 mx-auto mt-20 flex w-[70%] max-w-2xl justify-between rounded-lg bg-gray-700 px-6 py-3 sm:justify-between shadow-lg sm:hidden">
        {/* Breadcrumb (Hidden on small screens) */}
        <ul className="flex-row items-center text-lg text-white sm:flex">
          <li>
            <a href="#" className="hover:text-gray-300 text-sm">BUY & SELL Used Cars & Bikes</a>
          </li>
        </ul>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="menu-button text-2xl text-white hover:text-gray-200"
        >
          {sidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 z-[998] h-full w-3/4 bg-gray-100 pt-6 pb-8 sm:max-w-xs lg:w-80 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sidebar`}>
        {/* Close Button Inside Sidebar */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute right-4 top-4 text-black hover:text-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Sidebar Content */}
        <div className="px-4 pb-6">
          <ul className="mb-8 text-sm font-medium">
            <li>
              <a className="active flex font-bold text-xl items-center rounded py-3 pl-3 pr-4 text-black hover:bg-gray-600" href="#homepage">
                <span className="select-none">HOME</span>
              </a>
            </li>
            <li>
              <a className="flex items-center font-bold text-xl rounded py-3 pl-3 pr-4 text-black hover:bg-gray-600" href="#link1">
                <span className="select-none">POST FREE AD</span>
              </a>
            </li>
            <li>
              <a className="flex items-center font-bold text-xl rounded py-3 pl-3 pr-4 text-black hover:bg-gray-600" href="#link1">
                <span className="select-none">GET INSURANCE</span>
              </a>
            </li>
            <li>
              <a className="flex items-center font-bold text-xl rounded py-3 pl-3 pr-4 text-black hover:bg-gray-600" href="/contact">
                <span className="select-none">CONTACT US</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
