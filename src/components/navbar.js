import React from 'react';

import logo from '../static/images/logo/logo.png';
import Menu from './menu';

const menuItems = [1, 2, 3, 4, 5, 6];
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div
      className="flex flex-col fixed top-0 inset-x-0 z-100 bg-white shadow-md z-10 fadeInUp"
      style={{ animationDelay: `${1 + 1 * 0.1}s` }}
    >
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <header className="sm:flex border-b sm:border-0 sm:justify-between sm:items-center sm:px-4 sm:py-3">
          <div className="flex items-center justify-between px-4 py-3 sm:p-0">
            <div>
              <img className="h-16" src={logo} alt="factly"></img>
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                type="button"
                className="hover:text-gray-300 focus:text-gray-300 focus:outline-none"
              >
                <svg
                  className="fill-current w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  {navbarOpen && (
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
                  )}
                  {!navbarOpen && (
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="">
            <form className="w-full max-auto">
              <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search..."
                  aria-label="Search Input"
                />
                <button
                  className="flex-shrink-0 border-transparent border-4 text-gray-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                  type="button"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div
            className={`flex ${
              navbarOpen ? 'flex-col' : 'hidden'
            } sm:hidden border-b mb-1`}
          >
            {menuItems.map(item => (
              <div className="dropdown inline-block relative m-2">
                <button
                  type="button"
                  className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                  <span className="mr-1">Stories</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                  </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-10">
                  <li className="">
                    <a
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="/"
                    >
                      Post
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="/"
                    >
                      Images
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="/"
                    >
                      Something Else
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div
            className={`${!navbarOpen ? 'hidden' : 'flex'} sm:flex px-2 py-4`}
          >
            <a
              className="block px-2 py-1 font-semibold rounded hover:bg-gray-800"
              href="/"
            >
              <svg
                className="fill-current text-gray-400  w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
            <a
              href="/#"
              className="block px-2 py-1 font-semibold rounded hover:bg-gray-800"
            >
              <svg
                className="fill-current text-gray-400  w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
            <a
              href="/"
              className="block px-2 py-1 font-semibold rounded hover:bg-gray-800"
            >
              <svg
                className="fill-current text-gray-400 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
          </div>
        </header>
        <Menu className="hidden sm:flex"></Menu>
      </div>
    </div>
  );
}
