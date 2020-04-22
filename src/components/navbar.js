import React from 'react';

import logo from '../static/images/logo/logo.png';
import Menu from './menu';
import Account from './AccountDropdown';

const menuItems = [1, 2, 3, 4, 5, 6];
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [factcheck, setFactcheck] = React.useState(false);
  const [stories, setStories] = React.useState(false);
  return (
    <div
      className="flex flex-col fixed top-0 inset-x-0 z-100 bg-white border-b border-gray-300 z-10 fadeInUp"
      style={{ animationDelay: `${1 + 1 * 0.1}s` }}
    >
      <header className="flex item-center justify-between border-b  border-gray-100 p-2 text-md text-gray-800">
        <nav className="flex flex-grow items-center justify-between px-0 lg:px-4 py-3 sm:p-0 uppercase">
          <div className="flex flex-1 order-2 lg:order-1 items-center justify-end lg:justify-start">
            <div className="order-3 lg:order-1">
              <button
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="block px-2 lg:px-4 uppercase focus:outline-none"
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
              {navbarOpen && (
                <div
                  className="fixed left-0 w-full lg:w-2/5 pt-6 normal-case"
                  style={{ height: 'calc(100vh - 75px)' }}
                >
                  <div className="flex flex-col absolute left-auto bg-gray-100 border-t  border-gray-200 py-4 px-6 overflow-auto h-full w-full">
                    <div className="py-4">
                      <form className="w-full max-auto">
                        <div className="flex items-center border rounded border-gray-500 py-2">
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
                    <div className="py-4 border-b border-gray-500">
                      <h5 className="text-md font-normal leading-tight text-gray-700">
                        Follow Us
                      </h5>
                    </div>
                    <div className="flex px-2 py-4">
                      {[1, 2, 3, 4, 5].map(() => (
                        <a
                          className="block px-2 py-1 font-semibold rounded hover:opacity-50"
                          href="/"
                        >
                          <svg
                            className="fill-current text-gray-400 p-1 w-10 h-10 border rounded bg-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <title>Twitter</title>
                            <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                          </svg>
                        </a>
                      ))}
                    </div>
                    <div className="py-2 border-b border-gray-500">
                      <h5 className="text-md font-normal leading-tight text-gray-700">
                        More about factly
                      </h5>
                    </div>
                    <div className="flex flex-col justify-between px-2 py-4">
                      {[1, 2, 3, 4, 5].map(() => (
                        <a
                          className="flex items-center justify-start px-2 py-4 font-semibold rounded hover:opacity-50"
                          href="/"
                        >
                          <svg
                            className="fill-current text-gray-800  w-20 h-20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <title>Twitter</title>
                            <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                          </svg>
                          <div className="flex flex-col px-4">
                            <h4 className="text-xl font-medium">About Us</h4>
                            <p className="text-gray-600">
                              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
                              amet.
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className="order-2"
              onMouseEnter={() => setStories(true)}
              onMouseLeave={() => setStories(false)}
              onClick={() => setStories(!stories)}
            >
              <button
                type="button"
                className="block px-2 lg:px-4 uppercase focus:outline-none"
              >
                Stories
              </button>
              {stories && (
                <div
                  className="fixed left-0 lg:left-auto w-full lg:w-2/5 pt-5 normal-case"
                  style={{ height: 'calc(100vh - 75px)' }}
                >
                  <div className="flex flex-col absolute left-auto bg-gray-100 border-t  border-gray-200 p-4 overflow-auto h-full w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                      <div className="flex flex-col py-4 px-2 leading-tight border-b border-gray-100 last:border-b-0 hover:opacity-50">
                        <a
                          href="/"
                          className="w:full flex flex-row no-underline hover:no-underline"
                        >
                          <div className="flex lg:w-1/4 justify-center">
                            <img
                              src="https://source.unsplash.com/collection/345/800x600"
                              alt=""
                              className="h-20 rounded object-cover"
                            />
                          </div>
                          <div className="flex flex-col w-3/4 px-4 text-left">
                            <p className="w-full text-gray-600 text-xs md:text-sm">
                              Stories
                            </p>
                            <div className="w-full font-bold text-xl leading-tight text-gray-900">
                              ligula.Lorem ipsum eu nunc commodo posuere et sit
                              sit amet
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setFactcheck(true)}
              onMouseLeave={() => setFactcheck(false)}
              onClick={() => setFactcheck(!factcheck)}
              className="order-1 lg:order-3"
            >
              <button
                type="button"
                className="block px-2 lg:px-4 uppercase focus:outline-none"
              >
                Factcheck
              </button>
              {factcheck && (
                <div
                  className="fixed left-0 lg:left-auto w-full lg:w-2/5 pt-5 normal-case"
                  style={{ height: 'calc(100vh - 75px)' }}
                >
                  <div className="flex flex-col absolute left-auto bg-gray-100 border-t border-gray-200 p-4 overflow-auto h-full w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                      <div className="flex flex-col py-4 px-2 leading-tight border-b border-gray-100 last:border-b-0 hover:opacity-50">
                        <a
                          href="/"
                          className="w:full flex flex-row no-underline hover:no-underline"
                        >
                          <div className="flex lg:w-1/4 justify-center">
                            <img
                              src="https://source.unsplash.com/collection/345/800x600"
                              alt=""
                              className="h-20 rounded object-cover"
                            />
                          </div>
                          <div className="flex flex-col w-3/4 px-4 text-left">
                            <p className="w-full text-gray-600 text-xs md:text-sm">
                              Stories
                            </p>
                            <div className="w-full font-bold text-xl leading-tight text-gray-900">
                              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
                              amet.
                            </div>
                            <p className="text-gray-800 font-sans text-lg pt-2">
                              ligula.Lorem ipsum eu nunc commodo posuere et sit
                              amet ligula.Lorem ipsum eu nunc commodo posuere et
                              sit amet
                            </p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img className="h-8" src={logo} alt="factly"></img>
          </div>
          <div className="hidden lg:order-3 lg:flex flex-1 items-center justify-end">
            <a href="/" className="block px-4 py-2">
              Account Setting
            </a>
            <a
              href="/"
              className="block px-4 py-2 border-gray-300 rounded bg-gray-400 text-center"
            >
              Subscribe
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
