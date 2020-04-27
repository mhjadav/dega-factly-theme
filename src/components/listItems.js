import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import img from '../static/images/i.jpg';

function ListItems({
  item,
  postActiveIndex = 0,
  index,
  image = true,
  author = true,
  tags = false,
  excerpt = false,
  orientation = 'horizontal',
  className = 'p-6 border-gray-200',
  imageSize = 'w-full h-40'
}) {
  return (
    <div
      className={`flex flex-col leading-tight border-b last:border-b-0 ${className}`}
    >
      <Link
        to="post-details"
        className={`w-full flex ${orientation} no-underline hover:no-underline`}
      >
        {image && (
          <div className={`flex ${imageSize} justify-start items-start pr-4`}>
            <img src={img} className="w-full object-cover rounded" />
          </div>
        )}
        <div className="w-full flex flex-col">
          {tags && (
            <p className="w-full text-gray-600 text-xs md:text-sm pb-1">
              Stories
            </p>
          )}
          <div
            id={`nav-${index}`}
            className={`w-full font-bold font-sans text-base text-gray-800 ${postActiveIndex ===
              index && 'active'}`}
          >
            {item.title}
          </div>
          {excerpt && (
            <p className="text-gray-800 font-sans text-sm pt-2">
              {item.excerpt}
            </p>
          )}
        </div>
      </Link>
      {author && (
        <div className="flex mt-auto py-4">
          {orientation !== 'vertical' && (
            <div
              className={`hidden md:flex ${imageSize} justify-start items-start pr-4`}
              style={{ height: '0' }}
            ></div>
          )}
          <div
            className={`flex flex-col w-full ${orientation} justify-between items-start`}
          >
            <div className="flex flex-row flex-wrap">
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
      )}
    </div>
  );
}

ListItems.propTypes = {
  item: PropTypes.number,
  image: PropTypes.bool
};
export default ListItems;
