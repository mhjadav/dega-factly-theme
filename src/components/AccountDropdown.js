import React from 'react';
import logo from '../static/images/logo/logo.png';

const AccountDropdown = function({ className }) {
  const [accountDropdown, setAccountDropdown] = React.useState(false);
  return (
    <React.Fragment>
      <div className={`relative ${className}`}>
        <div className="relative mr-4">
          <button
            onClick={() => setAccountDropdown(!accountDropdown)}
            className="relative block h-8 w-8 rounded-full overflow-hidden focus:outline-none border-2 border-gray-600 focus:border-white z-10"
            type="button"
          >
            <img
              className="h-full w-full object-cover"
              src={logo}
              alt="factly"
            ></img>
          </button>
        </div>
        {accountDropdown && (
          <button
            tabIndex={-1}
            onClick={() => setAccountDropdown(!accountDropdown)}
            type="button"
            className="fixed inset-0 bg-black opacity-50 h-full w-full cursor-default"
          ></button>
        )}
        {accountDropdown && (
          <div className="absolute left-0 sm:left-auto sm:right-0 flex flex-col justify-center items-end">
            <div className="pointer-events-none flex items-center px-2 py-0 text-gray-500">
              <svg
                className="fill-current h-4 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="8 8"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
            <div className="w-48 bg-gray-800 rounded-lg py-2 shadow-xl">
              <a
                href="/"
                className="block px-4 py-2 text-gray-100 hover:bg-indigo-500 hover:text-white"
              >
                Account Setting
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-100 hover:bg-indigo-500 hover:text-white"
              >
                Logout
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-100 hover:bg-indigo-500 hover:text-white"
              >
                Settings
              </a>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AccountDropdown;
