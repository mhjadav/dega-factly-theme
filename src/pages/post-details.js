import React, { useState, useEffect, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import ListItems from '../components/listItems';
import Footer from '../components/footer';

const items = [
  {
    title:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament,Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum Lorem ipsum dolor sit ament',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  }
];

const posts = Array(1000).fill(12);
const IndexPage = ({ data }) => (
  <Layout>
    <div className="w-full text-xl leading-tight md:text-2xl text-gray-800 leading-normal rounded-t mx-auto px-6 pt-32">
      {/* Posts Container */}
      <div className="flex flex-wrap relative justify-between pt-8 -mx-6">
        {/* 2/3 col */}
        <div className="w-4/5 mx-auto p-6 flex flex-col">
          <div className="w-full">
            <h1 className="text-4xl text-gray-900">
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
              ipsum dolor sit amet.
            </h1>
          </div>
          <div className="w-full flex py-6 justify-between">
            <div className="flex flex-1 items-center text-gray-600 text-sm md:text-md">
              <p>20, Apr 2020</p>
              <b className="px-2">|</b>
              <p>1 min read</p>
            </div>
            <div className="flex flex-1 items-center justify-end">
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
            </div>
          </div>
          <div className="flex flex-wrap no-underline hover:no-underline border-b pb-6">
            <img
              src="https://source.unsplash.com/collection/345/800x600"
              className="h-full w-full rounded-t"
            />

            <div className="text-gray-800 font-sans text-lg my-6">
              <p>
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum eu nunc commodo posuere
                et sit amet ligula.Lorem ipsum eu nunc commodo posuere et sit
                amet.
              </p>
              <p>
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum eu nunc commodo posuere
                et sit amet ligula.Lorem ipsum eu nunc commodo posuere et sit
                amet.
              </p>
              <p>
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum eu nunc commodo posuere
                et sit amet ligula.Lorem ipsum eu nunc commodo posuere et sit
                amet.
              </p>
              <p>
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum eu nunc commodo posuere
                et sit amet ligula.Lorem ipsum eu nunc commodo posuere et sit
                amet.
              </p>
              <p>
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum eu nunc commodo posuere
                et sit amet ligula.Lorem ipsum eu nunc commodo posuere et sit
                amet.
              </p>
              <p>
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum eu nunc commodo posuere
                et sit amet ligula.Lorem ipsum eu nunc commodo posuere et sit
                amet.
              </p>
            </div>
            <div className="flex">
              {[1, 2, 3, 4].map(item => (
                <a
                  href="/"
                  className="w-full text-gray-800 text-sm md:text-md rounded p-2 mr-2 bg-gray-300"
                >
                  Coronavirus
                </a>
              ))}
            </div>
          </div>
          <div className="flex mt-auto py-4 pr-4 border-b">
            <div className="flex flex-col flex-1 items-start justify-center">
              {[1, 2].map(() => (
                <div className="flex justify-center items-start mb-8">
                  <img
                    className="w-20 h-20 rounded-full mr-2 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm md:text-md">
                      Written By
                    </span>
                    <span className="font-medium text-gray-800 text-lg md:text-xl">
                      John Doe
                    </span>
                    <p className="text-gray-600 text-md md:text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="flex my-auto">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* / Post Content */}
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default IndexPage;
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
