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
    title: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum',
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

const posts = Array(1000).fill(12);
const IndexPage = ({ data }) => {
  const [sidebarDockedBottom, setSidebarDockedBottom] = useState('');
  const [postItems, setPostItems] = useState(posts.slice(0, 6));
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = posts.slice(postItems.length, postItems.length + 6);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < posts.length);
  };
  const contentElement = useRef(null);
  const sidebarElement = useRef(null);
  let prevScrollPosition = 0;
  const isBottom = el =>
    sidebarElement.current.getBoundingClientRect().bottom <= window.innerHeight;

  const trackScrolling = useCallback(() => {
    const sidebarTop = sidebarElement.current.getBoundingClientRect().top;
    const contentTop = contentElement.current.getBoundingClientRect().top;
    const positionY = contentTop - sidebarTop;
    const isSet = sidebarElement.current.style.transform;
    console.log(positionY, contentTop, sidebarTop, isSet);

    if (prevScrollPosition > window.scrollY && !isSet && sidebarTop < 95) {
      setSidebarDockedBottom('');
      sidebarElement.current.style.transform = `translate3d(0px, ${Math.abs(
        positionY
      )}px, 0px)`;
    } else if (
      prevScrollPosition > window.scrollY &&
      positionY !== 0 &&
      sidebarTop > 95
    ) {
      sidebarElement.current.style.width = `${sidebarElement.current.clientWidth}px`;
      sidebarElement.current.style.transform = `translate3d(0px, 95.97222900390625px, 0px)`;
      setSidebarDockedBottom('fixed top-0');
    } else if (isBottom()) {
      sidebarElement.current.style.transform = '';
      sidebarElement.current.style.width = `${sidebarElement.current.clientWidth}px`;
      setSidebarDockedBottom('fixed bottom-0');
      // document.removeEventListener('scroll', trackScrolling);
    } else if (
      positionY === 0 ||
      (prevScrollPosition < window.scrollY && isSet)
    ) {
      sidebarElement.current.style.transform = '';
      setSidebarDockedBottom('');
    }

    prevScrollPosition = window.scrollY;
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      document.addEventListener('scroll', trackScrolling);
      return () => {
        document.removeEventListener('scroll', trackScrolling);
      };
    }
  }, [trackScrolling]);

  return (
    <Layout>
      <div className="w-full text-xl leading-tight md:text-2xl text-gray-800 leading-normal rounded-t mx-auto lg:px-6 py-12">
        <div className="flex flex-row justify-between pt-12 pb-6 lg:border-b">
          <div
            className="hidden lg:flex flex-col w-full lg:w-1/4 border-r px-6 sticky h-screen overflow-auto"
            style={{
              top: '95px'
            }}
          >
            <div className="block">
              {items.slice(0, 10).map((item, index) => (
                <ListItems
                  item={item}
                  index={index}
                  image={false}
                  author={false}
                  className="hover:opacity-50 py-2"
                />
              ))}
            </div>
          </div>
          <div
            ref={contentElement}
            className="flex flex-col w-full lg:w-2/4 px-6"
          >
            {/* <div className="mb-4 pb-4 border-b">
              <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                Top In Factchecks
              </h5>
            </div> */}
            <div className="bg-white rounded-t rounded-b-none overflow-hidden">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <img
                  src="https://source.unsplash.com/collection/345/800x600"
                  className="h-full w-full rounded-t"
                />
                <p className="w-full text-gray-600 text-xs md:text-sm pt-2">
                  Factchecks
                </p>
                <div className="w-full font-bold text-xl leading-tight text-gray-900">
                  Lorem ipsum dolor sit amet.
                </div>
                <p className="text-gray-800 font-sans text-lg pt-2">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                  ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
                  eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
                  commodo posuere et sit amet ligula. Lorem ipsum eu nunc
                  commodo posuere et sit amet ligula.Lorem ipsum eu nunc commodo
                  posuere et sit amet ligula.Lorem ipsum eu nunc commodo posuere
                  et sit amet.
                </p>
              </a>
              <div className="flex-none mt-auto py-4">
                <div className="flex items-center justify-between">
                  <div className="flex justify-center items-center">
                    <a
                      href="/"
                      className="text-gray-600 text-xs md:text-sm mr-2"
                    >
                      John Doe,
                    </a>
                    <a
                      href="/"
                      className="text-gray-600 text-xs md:text-sm mr-2"
                    >
                      John Doe Second
                    </a>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Apr, 21 2020
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col py-6">
              <div className="mb-4 pb-4 border-b">
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
                {postItems.map(item => (
                  <div className="bg-white rounded-t rounded-b-none overflow-hidden py-6 border-b border-gray-200">
                    <a
                      href="/"
                      className="w:full flex flex-col sm:flex-row no-underline hover:no-underline"
                    >
                      <div className="order-2 sm:order-1 w-full sm:w-3/4 flex flex-col">
                        <p className="w-full text-gray-600 text-xs md:text-sm">
                          Factchecks
                        </p>
                        <div className="w-full font-bold text-2xl leading-tight text-gray-900">
                          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                        </div>
                        <p className="text-gray-800 font-sans text-lg pt-2">
                          Lorem ipsum eu nunc commodo posuere et sit amet
                          ligula.Lorem ipsum eu nunc commodo posuere et sit amet
                          ligula.Lorem ipsum eu nunc commodo posuere et sit amet
                          ligula.Lorem ipsum eu nunc commodo posuere et sit amet
                        </p>
                      </div>
                      <div className="order-1 sm:order-2 w-full sm:w-1/4 flex justify-center py-4 sm:py-0 sm:px-4">
                        <img
                          src="https://source.unsplash.com/collection/345/800x600"
                          alt=""
                          className="w-full h-40 rounded object-cover"
                        />
                      </div>
                    </a>
                    <div className="flex-none mt-auto py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex justify-center items-center">
                          <a
                            href="/"
                            className="text-gray-600 text-xs md:text-sm mr-2"
                          >
                            John Doe,
                          </a>
                          <a
                            href="/"
                            className="text-gray-600 text-xs md:text-sm mr-2"
                          >
                            John Doe Second
                          </a>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm">
                          Apr, 21 2020
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            </div>
          </div>
          <div className="hidden lg:flex flex-col w-full lg:w-1/4 border-l px-6">
            <div ref={sidebarElement} className={`${sidebarDockedBottom}`}>
              <div className="mb-4 pb-4 border-b">
                <h5 className="font-thin text-xl leading-tight">
                  Top In Factchecks
                </h5>
              </div>
              {items.slice(0, 10).map((item, index) => (
                <ListItems item={item} index={index} />
              ))}
              <Footer></Footer>
            </div>
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
