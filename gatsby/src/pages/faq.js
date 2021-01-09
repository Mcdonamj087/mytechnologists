import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header/header.component';
import ScrollArrow from '../components/scroll-arrow/scroll-arrow.component';
import LogoMarqee from '../components/logo-marqee/logo-marqee';
import Image from 'gatsby-image';
import Block from '@sanity/block-content-to-react';

import './why-us.scss';

const FAQ = ({ data }) => {
  // const {
  //   seo,
  //   ourStoryBody,
  //   image1,
  //   image2,
  //   image3,
  //   whyChooseUsHeadline,
  //   whyChooseUsBody,
  //   logosHeadline,
  //   logos,
  // } = data.allSanityWhyUsPage.nodes[0].whyUsPageContent;

  // const {
  //   metaTitle,
  //   metaDescription,
  //   ogTitle,
  //   ogDescription,
  //   twitterTitle,
  //   twitterDescription,
  //   previewImage,
  // } = seo;

  return (
    <Layout wrapped>
      {/* <SEO
        title={metaTitle}
        description={metaDescription}
        previewImage={previewImage.asset.fluid.src}
        ogTitle={ogTitle || whyChooseUsHeadline}
        ogDescription={ogDescription || truncateText(whyChooseUsBody)}
        twitterTitle={twitterTitle || whyChooseUsHeadline}
        twitterDescription={twitterDescription || truncateText(whyChooseUsBody)}
      /> */}
      <Header whiteBkg />
      <section className='faq'>
        <div>FAQ</div>
      </section>
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     allSanityWhyUsPage {
//       nodes {
//         whyUsPageContent {
//           seo {
//             metaTitle
//             metaDescription
//             ogTitle
//             ogDescription
//             twitterTitle
//             twitterDescription
//             previewImage {
//               asset {
//                 fluid(maxWidth: 1440) {
//                   src
//                 }
//               }
//             }
//           }
//           ourStoryBody
//           image1 {
//             asset {
//               fluid(maxWidth: 360) {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//           image2 {
//             asset {
//               fluid(maxWidth: 360) {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//           image3 {
//             asset {
//               fluid(maxWidth: 360) {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//           whyChooseUsBody {
//             _rawData
//           }
//           whyChooseUsHeadline
//           logosHeadline
//           logos {
//             _key
//             name
//             image {
//               asset {
//                 fluid(maxWidth: 200) {
//                   ...GatsbySanityImageFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default FAQ;
