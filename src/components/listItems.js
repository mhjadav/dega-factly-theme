import React from 'react';
import PropTypes from 'prop-types';

function ListItems({ item, index, image = true }) {
  return (
    <div className="flex p-0 pt-2 mb-6 leading-tight border-b border-gray-200">
      <a
        href="/"
        className="w-full flex flex-row no-underline hover:no-underline"
      >
        {image && (
          <div className="w-1/4 flex justify-center items-start pr-4">
            <img
              src={`https://source.unsplash.com/collection/${index +
                1000}/800x200`}
              alt={item.title}
              className="h-24 object-cover rounded"
            />
          </div>
        )}
        <div className={`${image ? 'w-3/4' : 'w-full'} flex flex-col p-0`}>
          <div className="w-full font-bold font-sans text-lg text-gray-800 pb-2">
            {item.title}
          </div>
          <p className="text-gray-800 font-sans text-lg">{item.excerpt}</p>
          <div className="flex-none mt-auto py-4">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2 avatar"
                  data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300"
                  alt="Avatar of Author"
                />
                <span className="text-gray-600 text-xs md:text-sm">
                  {item.author}
                </span>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                {item.time} Read
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

ListItems.propTypes = {
  item: PropTypes.number,
  image: PropTypes.bool
};
export default ListItems;
