import React from 'react';

function Footer({ className = '' }) {
  return (
    <footer
      id="footer"
      className={`relative bg-gray-300 pt-8 pb-6 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* <div className="w-full md:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Lorem ipsum dolor sit amet
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </h5>
            <div className="mt-6 flex">
              {[1, 2, 3].map(item => (
                <a href="/" target="_blank" className="mx-2">
                  <svg
                    className="fill-current text-gray-400  w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Twitter</title>
                    <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-sm mt-6 text-gray-600 font-semibold">
              Factly
              <a href="/" className="text-gray-700" target="_blank">
                {' '}
                licensed MIT
              </a>
            </p>
          </div> */}
          <div className="w-full">
            <div className="flex items-top mb-6">
              <div className="pt-6 md:pt-0 md:px-4 m-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/"
                      target="_blank"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/"
                      target="_blank"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pt-6 md:pt-0 md:px-4 m-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/"
                      target="_blank"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/"
                      target="_blank"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/"
                      target="_blank"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {/* */}2020{/* */} Factly Portal by{/* */}{' '}
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
              >
                Factly Media
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
