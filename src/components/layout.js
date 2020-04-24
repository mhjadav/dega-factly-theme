import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import '../static/css/tailwind.css';
import Navbar from './navbar';
import Footer from './footer';

const Layout = props => (
  <StaticQuery
    query={graphql`
      query IndexPage {
        site {
          siteMetadata {
            description
            title
            author
            type
            logo
            favicon
            siteUrl
          }
        }
      }
    `}
    render={({ site }) => {
      const { siteMetadata } = site;
      const { children } = props;

      return (
        <>
          <Helmet
            title={siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: siteMetadata.description
              },
              { name: 'author', content: siteMetadata.author },
              { property: 'og:url', content: siteMetadata.siteUrl },
              {
                property: 'og:image',
                content: `${siteMetadata.siteUrl}/images/favicon.png`
              },
              { property: 'og:title', content: siteMetadata.title },
              { property: 'og:type', content: siteMetadata.type },
              {
                property: 'og:description',
                content: siteMetadata.description
              }
            ]}
            link={[{ rel: 'canonical', href: siteMetadata.siteUrl }]}
          >
            <html lang={siteMetadata.lang} />
            <body
              className="bg-white text-gray-900 leading-normal mx-auto w-full tracking-wider"
              style="max-width:2000px"
            ></body>
          </Helmet>
          <Navbar></Navbar>
          <div className="w-full text-xl leading-tight md:text-2xl text-gray-800 leading-normal rounded-t mx-auto lg:px-6 pt-16">
            {children}
          </div>
          {/* <Footer></Footer> */}
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
