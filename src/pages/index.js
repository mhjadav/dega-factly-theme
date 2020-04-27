import React, { useState, useEffect, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import ListItems from '../components/listItems';
import Footer from '../components/footer';
import img from '../static/images/i.jpg';

const items = [
  {
    title:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament,Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament Lorem ipsum dolor sit amentLorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament  Lorem ipsum dolor sit ament Lorem ipsum dolor sit amentLorem ipsum dolor sit ament, Lorem ipsum',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit amentLorem ipsum dolor sit ament, Lorem ipsum',
    author: 'John Doe',
    time: '2 Min',
    image: ''
  },
  {
    title: 'Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum',
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
    title: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
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

const IndexPage = ({ data }) => {
  const [postItems, setPostItems] = useState(items.slice(0, 2));
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = items.slice(postItems.length, postItems.length + 2);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < items.length);
  };

  return (
    <Layout>
      <div className="flex flex-row justify-between lg:border-b">
        <div className="sidebar lg:flex lg:w-1/4 border-r border-l sticky">
          <div className="block">
            {items.slice(0, 10).map((item, index) => (
              <ListItems
                item={item}
                index={index}
                image={false}
                author={false}
                className="py-2 px-6 border-gray-200"
              />
            ))}
          </div>
        </div>
        <div className="main-content lg:w-2/4">
          {/* <div className="mb-4 pb-4 border-b">
              <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                Top In Factchecks
              </h5>
            </div> */}
          <div className="bg-white rounded-t rounded-b-none overflow-hidden px-6">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img src={img} className="h-full w-full rounded-t" />
              <p className="w-full text-gray-600 text-xs md:text-sm pt-2">
                Factchecks
              </p>
              <div className="w-full font-bold text-xl leading-tight text-gray-900">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 font-sans text-lg pt-2">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum eu nunc commodo posuere
                et sit amet ligula.Lorem ipsum eu nunc commodo posuere et sit
                amet.
              </p>
            </a>
            <div className="flex-none mt-auto py-4">
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center">
                  <a href="/" className="text-gray-600 text-xs md:text-sm mr-2">
                    John Doe,
                  </a>
                  <a href="/" className="text-gray-600 text-xs md:text-sm mr-2">
                    John Doe Second
                  </a>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Apr, 21 2020</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-6">
            <div className="mb-4 pb-4 border-b px-6">
              <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                Latest from factly media
              </h5>
            </div>
            <InfiniteScroll
              pageStart={0}
              loadMore={handleLoadMore}
              hasMore={hasNextPage}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              {postItems.map((item, index) => (
                <ListItems
                  orientation="vertical horizontal"
                  item={item}
                  index={index}
                  tags
                  excerpt
                  imageSize="w-full md:w-1/3 h-auto md:h-24 py-4 md:py-0"
                />
              ))}
            </InfiniteScroll>
          </div>
        </div>
        <div className="sidebar lg:flex lg:w-1/4 border-l sticky">
          <div className="block">
            <div className="mb-4 pb-4 border-b px-6">
              <h5 className="heading">Top In Factchecks</h5>
            </div>
            {items.slice(0, 10).map((item, index) => (
              <ListItems orientation="vertical" item={item} index={index} />
            ))}
            <Footer></Footer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

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
