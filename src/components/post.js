import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AuthorSingle from './author-single';
import AuthorMultiple from './author-multiple';
import img from '../static/images/i.jpg';

const postContent =
  '<article class="has-text-justify post-content-font"><p><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">With more and more people choosing to travel by air every year, the Directorate General of Civil Aviation (DGCA) released a </span><a href="http://www.civilaviation.gov.in/sites/default/files/Passenger%20Charter%20MoCA%20India%20Feb%202019.pdf" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">‘Passenger Charter’</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">, or a ‘Know Your Rights’ document for the passengers aiming to make air travel efficient, fair and approachable. This document was released in February this year at the ‘</span><a href="https://pib.gov.in/PressReleseDetail.aspx?PRID=1566517" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">Aviation Conclave</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">’ themed ‘Flying for all’.</span></p><p><br></p><p><span style="color: rgb(59, 59, 59);">The charter enlightens flyers all with their rights when a flight is cancelled, delayed, diverted and in other emergencies. Factly had </span><a href="https://factly.in/what-are-your-rights-as-an-air-traveller/" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">earlier written</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">in detail about this charter.</span></p><p><span style="color: rgb(59, 59, 59);">We look at the complaints received, nature of complaints and action taken with respect to facilities provided to flight passengers in this story.</span></p><p><br></p><p><strong style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">The number of domestic passengers has doubled from 6 crores in 2014 to about 12 crores in 2018</strong></p><p><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">In the period between January and July 2019 alone, 8.26 crore </span><a href="http://dgca.nic.in/reports/Traffic-ind.htm" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">passengers</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">were carried by domestic airlines. This is an increase of 3.2% compared to the same period last year.</span></p><p><span style="color: rgb(59, 59, 59);">In fact, the total number of domestic passengers has doubled from around 6 crores in 2014 to about 12 crores in 2018. While the number of passengers has increased manifold over the years, what about the numbers related to complaints?</span></p><p><br></p><p><strong style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">A total of 30,433 complaints have been registered from 2016 till May 2019</strong></p><p><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">Annually, thousands of </span><a href="http://164.100.24.220/loksabhaquestions/annex/171/AU5297.pdf" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">complaints</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">are lodged against airlines for various reasons. Data provided by the Ministry of Civil Aviation in the Lok Sabha shows that from 2016 to 2018, the number of complaints has reduced. In the year 2016, a total of 9772 complaints were received. The number of complaints went down by 15% in 2017 (8293 complaints) and by a further 18% in 2018 (6820 complaints). The number for 2019 is expected to be more than the 2018 figure since 5548 complaints have already been lodged in just 5 months till May 2019.</span></p><p><br></p><p><img src="https://images.degacms.com/dega-content/factly/2019/9/1569672453487-complaints-against-airlines_complaints-against-airlines-annual-number.jpg"></p><p><br></p><p><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">The complaints are registered for varied reasons like baggage, catering, customer service, facilities to the disabled, refund, fare, flight problem, behaviour of staff and more.</span></p><p><br></p><p><strong style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">30% of complaints are related to flight problems, 25% about customer service and 22% regarding baggage</strong></p><p><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">The maximum number of complaints lodged every year is related to flight problem like delay, cancellation etc. Of the total 30,433 complaints in the last three years, 30% of them fall under this category. Annually, an average of 2,294 cases registered are related to flight problems like delay etc. Complaints related to customer service are the next in line. Issues such as improper treatment, threats and more fall under this category. Such complaints comprise 25% of the total complaints. Baggage related issues such as loss, damage and misplacement amount to 22% of the complaints. Apart from these, issues related to catering, persons with disability, fare, refund and others together amount to the remaining 23% of the complaints. The annual number of complaints received in each of these categories from 2016 to May 2019 is in the following chart.</span></p><p><br></p><p><img src="https://images.degacms.com/dega-content/factly/2019/9/1569672524826-complaints-against-airlines_complaints-against-airlines-annual-number-by-type.jpg"></p><p><strong style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">From 2016-2018, more than₹106 crores paid in Compensation</strong></p><p><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">The resolution in most of these complaints has been compensation in terms of refunds or providing facilities. While most of the airlines provide alternate facilities to deal with the concerns of passengers, a look at the money spent on compensation reveals that every year, substantial amounts of money is spent on compensation for issues related to flight delays, denied boarding and flight cancellations. In 2016, ₹ 22.1 crores was spent on compensation. In the following years, 2017 and 2018, ₹ 45.6 crores and ₹ 40.7 crores was spent. For the year 2019, till May 2019, ₹ 19.2 crores has been spent. Compensation has been the largest for denied boarding where ₹ 68.2 crores has been spent for compensating for denied boarding. Flight delays has resulted in a compensation of ₹ 42.1 crores. Compensation paid for flight cancellation has amounted to ₹ 17.3 crores. It has to be noted that though the number of complaints has reduced from 2016 to 2017, the total compensation amount has almost doubled in 2017.</span></p><p><br></p><p><img src="https://images.degacms.com/dega-content/factly/2019/9/1569672571046-complaints-against-airlines_total-annual-compensation-paid-by-category.jpg"></p><p><br></p><p><strong style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">The passenger charter clearly lays down the rights of Flyers</strong></p><p><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">The passenger charter clearly lays down the rights of flyers and provides details of all the facilities to be provided to passengers.&nbsp;For instance, for a delay of flight by more than four hours, the airlines must provide food or refreshments to the passengers. If the delay is more than six hours it is mandatory that the airline informs the passengers a day in advance.&nbsp;There are many other such provisions in the passenger charter. You can read more about them </span><a href="https://factly.in/what-are-your-rights-as-an-air-traveller/" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">here</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">.</span></p><p><br></p><p><strong style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">‘Airsewa’ launched to register grievances</strong></p><p><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">In order to make it simpler for people to file complaints and also provide information about flights, the Government of India launched the </span><a href="https://airsewa.gov.in/home" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">Airsewa</a><span style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">portal and a mobile application in November 2016. Further, one can also file a grievance using #Airsewa on social media platforms such as Facebook and Twitter.</span></p><p><br></p><p><img src="https://images.degacms.com/dega-content/factly/2019/9/1569672633443-complaints-against-airlines_airsewa.jpg"></p><p><br></p><p><br></p><div class="tweet" data-id="1198856456117854209"></div><p><br></p><p><br></p><p><strong style="color: rgb(59, 59, 59); background-color: rgb(255, 255, 255);">Featured Image: </strong><a href="http://images.newindianexpress.com/uploads/user/imagelibrary/2019/2/24/w900X450/KARMAY352_04-06-2018_12_49_48.jpg" target="_blank" style="color: rgb(229, 78, 83); background-color: rgb(255, 255, 255);">Compensation for complaints against Airlines&#65279;</a></p><p><br></p></article>';

function Post({ observer, index }) {
  const headerSocialIcon = useRef(null);
  const postSection = useRef(null);
  useEffect(() => {
    observer.observe(headerSocialIcon.current);
    observer.observe(postSection.current);
  }, [observer]);
  return (
    <div
      post=""
      ref={postSection}
      id={index}
      className="flex flex-col p-6 mb-12"
    >
      <div className="bg-white rounded-t rounded-b-none overflow-hidden">
        <h1 className="font-medium text-2xl py-2">
          Between 2016 & 2018, more than ₹ 100 crore paid in Compensation for
          complaints against Airlines
        </h1>
        <div className="flex flex-col md:flex-row">
          <AuthorMultiple />
          <div
            social-icon=""
            ref={headerSocialIcon}
            className="flex flex-1 items-center justify-start md:justify-end"
          >
            <a
              className="block px-2 fisrt:px-0 py-1 font-semibold rounded hover:bg-gray-800"
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
      </div>
      <div className="flex flex-col md:flex-row flex-wrap my-6 bg-gray-200">
        <div className="flex-1">
          <img
            src={img}
            alt=""
            className="w-full h-64 rounded-t rounded-l-none md:rounded-t-none md:rounded-l object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 p-4">
          <div className="w-full font-bold text-2xl leading-tight text-gray-900">
            Excerpt
          </div>
          <p className="text-gray-800 font-sans text-lg pt-2">
            Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum
            eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
            commodo posuere et sit amet ligula.Lorem ipsum eu nunc commodo
            posuere et sit amet eu nunc commodo posuere et sit amet ligula.Lorem
            ipsum eu nunc commodo posuere et sit amet
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        {[1, 2, 3, 4].map(item => (
          <a
            href="/"
            className={`border border-gray-200 rounded text-white text-left text-lg p-2 mx-2 
            ${item === 1 && 'bg-red-600'}
            ${item === 2 && 'bg-gray-600'}
            ${item === 3 ? 'bg-green-600' : 'bg-gray-600'}
            `}
          >
            Indian Railways is not deducting around 20 rupees on every cancelled
            ticket.
          </a>
        ))}
      </div>
      <div className="w-full lg:w-3/4 mx-auto font-sans text-xl">
        <div
          className="my-6 pb-6 border-b text-gray-800"
          dangerouslySetInnerHTML={{ __html: postContent }}
        ></div>
        <div className="flex flex-wrap pb-6 border-b">
          <div className="flex flex-wrap">
            {[1, 2, 3, 4].map(item => (
              <a
                href="/"
                className="text-center text-gray-800 text-sm md:text-md rounded p-2 m-2 bg-gray-300"
              >
                Coronavirus
              </a>
            ))}
          </div>
          {/* <div className="flex flex-1 items-center justify-start md:justify-end">
            {[1, 2, 3, 4].map(() => (
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
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  observer: PropTypes.shape({
    observe: () => {}
  })
};
export default Post;
