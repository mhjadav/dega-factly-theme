import React from 'react';

import { Link } from 'gatsby';
import logo from '../static/images/logo/logo.png';
import Menu from './menu';
import Account from './AccountDropdown';
import ListItems from './listItems';

const menuItems = Array(20).fill({
  title:
    'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament,Lorem ipsum dolor sit ament',
  excerpt:
    'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
  author: 'John Doe',
  time: '2 Min'
});
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [factcheck, setFactcheck] = React.useState(false);
  const [stories, setStories] = React.useState(false);
  const [editions, setEditions] = React.useState(false);

  return (
    <React.Fragment>
      {/* {navbarOpen && (
        <button
          type="button"
          className="absolute inset-0 w-full h-full z-20"
          onClick={() => setNavbarOpen(false)}
        ></button>
      )} */}

      <div
        className="fixed top-0 inset-x-0 bg-white border-b border-gray-300 z-10 fadeInUp"
        style={{ animationDelay: `${0.5}s` }}
      >
        <header className="flex item-center justify-between border-b  border-gray-100 p-2 text-sm text-gray-800">
          <nav className="flex flex-grow items-center justify-between px-0 lg:px-4 py-3 sm:p-0">
            <div className="flex flex-1 order-2 lg:order-1 items-center justify-end lg:justify-start">
              <div
                className="order-3 lg:order-1"
                onMouseEnter={() => setNavbarOpen(true)}
                onMouseLeave={() => setNavbarOpen(false)}
                onTouchEnd={() => setNavbarOpen(!navbarOpen)}
              >
                <button
                  type="button"
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
                    <div className="flex flex-col absolute left-auto bg-gray-300 border-t  border-gray-200 py-4 px-6 overflow-auto h-full w-full">
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
                        {['about', 'terms'].map(item => (
                          <Link
                            className="flex items-center justify-start px-2 py-4 font-semibold rounded hover:opacity-50"
                            to={item}
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
                              <h4 className="text-xl font-medium uppercase">
                                {item}
                              </h4>
                              <p className="text-gray-600">
                                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
                                amet.
                              </p>
                            </div>
                          </Link>
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
                onTouchEnd={() => setStories(!stories)}
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
                    <div className="flex flex-col absolute left-auto bg-gray-300 border-t  border-gray-200 p-4 overflow-auto h-full w-full">
                      {menuItems.map((item, index) => (
                        <ListItems
                          item={item}
                          index={index}
                          author={false}
                          tags
                          image={false}
                          className="py-2 px-6 border-gray-200"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setFactcheck(true)}
                onMouseLeave={() => setFactcheck(false)}
                onTouchEnd={() => setFactcheck(!factcheck)}
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
                    <div className="flex flex-col absolute left-auto bg-gray-300 border-t border-gray-200 py-4 overflow-auto h-full w-full">
                      {menuItems.map((item, index) => (
                        <ListItems
                          item={item}
                          index={index}
                          author={false}
                          tags
                          excerpt
                          imageSize="w-1/4 h-20"
                        />
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
              <button
                type="button"
                className="block px-2 lg:px-4 uppercase focus:outline-none"
              >
                Emails
              </button>
              <div
                onMouseEnter={() => setEditions(true)}
                onMouseLeave={() => setEditions(false)}
                onTouchEnd={() => setEditions(!editions)}
              >
                <button
                  type="button"
                  className="block px-2 lg:px-4 uppercase focus:outline-none"
                >
                  Editions
                </button>
                {editions && (
                  <div
                    className="fixed lg:right-0 w-full lg:w-2/5 pt-5 normal-case"
                    style={{ height: 'calc(100vh - 75px)' }}
                  >
                    <div className="flex flex-col absolute left-auto bg-gray-300 border-t  border-gray-200 py-4 px-6 overflow-auto h-full w-full">
                      <div className="py-2 border-b border-gray-500">
                        <h5 className="text-md font-normal leading-tight text-gray-700 uppercase">
                          Choose your home edition
                        </h5>
                      </div>
                      <div className="flex flex-col justify-between px-2 py-4">
                        {['English', 'Telugu', 'Kannada'].map(item => (
                          <Link
                            className="flex items-center justify-start px-2 py-4 font-semibold rounded hover:opacity-50  border-b border-gray-200"
                            to={item}
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
                              <h4 className="text-xl font-medium uppercase">
                                {item}
                              </h4>
                              <p className="text-gray-600">
                                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
                                amet.
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="block lg:px-4 uppercase focus:outline-none bg-gray-300 rounded p-2"
              >
                Subscribe
              </button>
            </div>
          </nav>
        </header>
      </div>
    </React.Fragment>
  );
}
