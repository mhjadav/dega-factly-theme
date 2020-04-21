import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

const DesignOne = ({ data }) => (
  <Layout>
    <div className="w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t mx-auto px-6 pt-32">
      {/* Lead Card */}
      <div className="flex flex-col xl:flex-row justify-between pt-12">
        <div className="flex flex-wrap justify-center items-center xl:w-2/3 bg-white rounded overflow-hidden">
          {[1, 2, 3, 4].map(item => (
            <a
              href="/"
              className="w:full sm:w-1/2 flex flex-col no-underline hover:no-underline px-2 mb-4 shadow-lg sm:shadow-xs"
            >
              <div className="w-full rounded-t">
                <img
                  src={`https://source.unsplash.com/collection/${item +
                    1000}/400x200`}
                  alt={item}
                  className="w-full shadow"
                />
              </div>
              <div className="relative">
                <div className="w-full flex-1 bg:white sm:bg-black opacity-50 static sm:absolute bottom-0 overflow-hidden">
                  <div className="w-full font-bold text-base text-base sm:text-white px-4 py-2">
                    👋 Welcome fellow Tailwind CSS and Ghost fan
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="w-full p-0 xl:px-6 xl:w-1/3 hidden sm:flex flex-row xl:flex-col overflow-hidden">
          {[1, 2, 3, 4].map(item => (
            <div className="flex h-full xl:h-24 p-4 xl:p-0 xl:mb-4">
              <a
                href="/"
                className="flex flex-col xl:flex-row no-underline hover:no-underline"
              >
                <div className="w-full xl:w-2/6 flex justify-center items-center">
                  <img
                    src={`https://source.unsplash.com/collection/${item +
                      1000}/600x600`}
                    alt={item}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col p-0 xl:px-4">
                  <div className="w-full hidden xl:block font-bold text-xl text-gray-900">
                    <img
                      className="w-8 h-8 rounded-full mr-4 avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                  </div>
                  <div className="w-full font-bold font-serif text-base text-gray-800">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="hidden xl:inline text-gray-800 font-serif text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="block xl:hidden flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                      />
                      <p className="hidden md:inline text-gray-600 text-xs md:text-sm">
                        1 MIN READ
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* /Lead Card */}
      {/* Posts Container */}
      <div className="flex flex-wrap justify-between pt-12 -mx-6">
        {/* 1/3 col */}
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src="https://source.unsplash.com/collection/225/800x600"
                className="h-64 w-full rounded-t pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
        {/* 1/3 col */}
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src="https://source.unsplash.com/collection/3106804/800x600"
                className="h-64 w-full rounded-t pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquam at ip
                Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
        {/* 1/3 col */}
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src="https://source.unsplash.com/collection/539527/800x600"
                className="h-64 w-full rounded-t pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                GETTING STARTED
              </p>
              <div className="w-full  font-bold text-xl text-gray-900 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
        {/* 1/2 col */}
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src="https://source.unsplash.com/collection/3657445/800x600"
                className="h-full w-full rounded-t pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
        {/* 1/2 col */}
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src="https://source.unsplash.com/collection/764827/800x600"
                className="h-full w-full rounded-t pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
        {/* 2/3 col */}
        <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src="https://source.unsplash.com/collection/325867/800x600"
                className="h-full w-full rounded-t pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
        {/* 1/3 col */}
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src="https://source.unsplash.com/collection/1118905/800x600"
                className="h-full w-full rounded-t pb-6"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
      </div>
      {/* / Post Content */}
    </div>
  </Layout>
);

DesignOne.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default DesignOne;
export const query = graphql`
  query {
    file(relativePath: { eq: "logo/logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
