import React, { useState, useEffect, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import ListItems from '../components/listItems';
import Footer from '../components/footer';
import Post from '../components/post';

const items = [
  {
    title:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament,Lorem ipsum dolor sit ament',
    excerpt:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
    description:
      'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
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
const PostDetails = ({ data }) => {
  const [postItems, setPostItems] = useState(posts.slice(0, 2));
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = posts.slice(postItems.length, postItems.length + 2);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < posts.length);
  };

  return (
    <Layout>
      <div className="flex flex-row justify-between">
        <div className="sidebar lg:flex lg:w-1/4 border-r border-l sticky">
          <div className="block">
            <div className="mb-4 pb-4 border-b px-6">
              <h5 className="font-thin text-xl leading-tight">
                Selected stories for you
              </h5>
            </div>
            {items.slice(0, 10).map((item, index) => (
              <ListItems
                item={item}
                index={index}
                image={false}
                author={false}
                className="py-2 px-6 border-gray-200"
              />
            ))}
            <Footer className="mt-6" />
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-3/4 p-6">
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
              <Post />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </Layout>
  );
};

PostDetails.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default PostDetails;
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
