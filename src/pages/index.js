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
    sidebarElement.current.getBoundingClientRect().bottom <=
    window.innerHeight + 5;

  const trackScrolling = useCallback(() => {
    const sidebarTop = Math.abs(
      sidebarElement.current.getBoundingClientRect().top
    );
    const contentTop = Math.abs(
      contentElement.current.getBoundingClientRect().top
    );
    const positionY = contentTop - sidebarTop;
    const isSet = sidebarElement.current.style.transform;
    if (prevScrollPosition > window.scrollY && !isSet && positionY > 145) {
      setSidebarDockedBottom('');
      sidebarElement.current.style.transform = `translate3d(0px, ${positionY}px, 0px)`;
    } else if (
      prevScrollPosition > window.scrollY &&
      positionY > 24 &&
      sidebarTop < 146
    ) {
      sidebarElement.current.style.width = `${sidebarElement.current.clientWidth}px`;
      sidebarElement.current.style.transform = `translate3d(0px, 146px, 0px)`;
      setSidebarDockedBottom('fixed top-0');
    } else if (prevScrollPosition > window.scrollY && positionY <= 24) {
      sidebarElement.current.style.transform = '';
      setSidebarDockedBottom('');
    } else if (isBottom()) {
      sidebarElement.current.style.transform = '';
      sidebarElement.current.style.width = `${sidebarElement.current.clientWidth}px`;
      setSidebarDockedBottom('fixed bottom-0');
      // document.removeEventListener('scroll', trackScrolling);
    } else if (prevScrollPosition < window.scrollY) {
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
      <div className="w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t mx-auto px-6 pt-32">
        {/* Lead Card */}
        <div
          className="flex flex-col lg:flex-row justify-between pt-12 pb-6 lg:border-b fadeInUp"
          style={{ animationDelay: `${1 + 1 * 0.1}s` }}
        >
          <div className="flex flex-wrap justify-center lg:w-3/5 bg-white rounded overflow-hidden">
            <a
              href="/"
              className="w:full flex flex-col flex-1 no-underline hover:no-underline px-2 mb-6 shadow-lg sm:shadow-none"
            >
              <div className="w-full rounded-t">
                <img
                  src={`https://source.unsplash.com/collection/${2 +
                    1000}/800x200`}
                  alt={2}
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
            {[1, 2].map(item => (
              <a
                href="/"
                className="w:full flex flex-row flex-wrap sm:flex-no-wrap no-underline hover:no-underline px-2 mb-6"
              >
                <div className="sm:w-1/4 flex justify-center">
                  <img
                    src={`https://source.unsplash.com/collection/${item +
                      1000}/800x200`}
                    alt={item}
                    className="h-32 rounded object-cover"
                  />
                </div>
                <div className="sm:w-3/4 flex flex-col py-4 sm:py-0 sm:px-4">
                  <div className="w-full font-bold font-sans text-base text-gray-800 pb-4">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-sans text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex-none mt-auto py-4 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex justify-center items-center">
                        <img
                          className="w-8 h-8 rounded-full mr-2 avatar"
                          data-tippy-content="Author Name"
                          src="http://i.pravatar.cc/300"
                          alt="Avatar of Author"
                        />
                        <span className="text-gray-600 text-xs md:text-sm">
                          John Doe
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">
                        1 MIN READ
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="w-full p-0 lg:px-6 lg:w-2/5 flex flex-col overflow-hidden">
            {items.slice(0, 4).map((item, index) => (
              <ListItems item={item} index={index} />
            ))}
          </div>
        </div>
        {/* /Lead Card */}
        {/* Posts Container */}
        <div className="flex flex-wrap relative justify-between pt-8 -mx-6">
          {/* 2/3 col */}
          <div className="w-full lg:w-3/5 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <img
                  src="https://source.unsplash.com/collection/345/800x600"
                  className="h-full w-full rounded-t pb-6"
                />
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  GETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p className="text-gray-800 font-sans text-base px-6 mb-5">
                  Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
              <div className="flex-none mt-auto py-4 px-6">
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
          {/* 1/3 col */}
          <div className="w-full lg:w-2/5 p-6 flex flex-col flex-grow flex-shrink">
            <div className="mb-4 pb-4 text-xl border-b">
              <h5 className="font-thin text-text-xl">Top In Factchecks</h5>
            </div>
            {items.slice(1, 6).map((item, index) => (
              <ListItems item={item} index={index} image={false} />
            ))}
          </div>
          <div
            ref={contentElement}
            className="w-full lg:w-3/5 order-2 lg:order-1 p-6 mt-6 flex flex-col flex-grow flex-shrink overflow-auto h-auto"
          >
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
                <a
                  href="/"
                  className="w:full flex flex-row flex-wrap sm:flex-no-wrap no-underline hover:no-underline px-2 mb-4"
                >
                  <div className="sm:w-1/4 flex justify-center">
                    <img
                      src={`https://source.unsplash.com/collection/${item +
                        1000}/800x200`}
                      alt={item}
                      className="h-32 rounded object-cover"
                    />
                  </div>
                  <div className="sm:w-3/4 flex flex-col py-4 sm:py-0 sm:px-4">
                    <p className="w-full text-gray-600 text-xs md:text-sm">
                      #TRENDING #INTEREST
                    </p>
                    <div className="w-full font-bold font-sans text-base text-gray-800 pb-4">
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-sans text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="flex-none mt-auto py-4 bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex justify-center items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-2 avatar"
                            data-tippy-content="Author Name"
                            src="http://i.pravatar.cc/300"
                            alt="Avatar of Author"
                          />
                          <span className="text-gray-600 text-xs md:text-sm">
                            John Doe
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm">
                          1 MIN READ
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </InfiniteScroll>
          </div>
          <div className="w-full lg:w-2/5 flex flex-col flex-grow flex-shrink order-1 lg:order-2 lg:border-l-2 border-b-2 lg:border-b-0 p-6 mt-6">
            <div ref={sidebarElement} className={`${sidebarDockedBottom}`}>
              <div className="block">
                <div className="mb-4 pb-4 text-xl border-b">
                  <h5 className="font-thin text-text-xl">Top In Factchecks</h5>
                </div>
                {items.slice(1, 6).map((item, index) => (
                  <ListItems item={item} index={index} />
                ))}
              </div>

              <div className="block">
                <div className="mb-4 pb-4 text-xl border-b">
                  <h5 className="font-thin text-text-xl">Top In Factchecks</h5>
                </div>
                {items.slice(1, 6).map((item, index) => (
                  <ListItems item={item} index={index} />
                ))}
              </div>

              <div className="block">
                <div className="mb-4 pb-4 text-xl border-b">
                  <h5 className="font-thin text-text-xl">Top In Factchecks</h5>
                </div>
                {items.slice(1, 6).map((item, index) => (
                  <ListItems item={item} index={index} />
                ))}
                <Footer className="hidden lg:block"></Footer>
              </div>
            </div>
          </div>
        </div>
        {/* / Post Content */}
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
