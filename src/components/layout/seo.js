/**
 * SEO component that sets the page title for search engine optimization
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 
 function Seo({ description, lang, image, meta, title }) {
   const metaDescription = description
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={title}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           property: `og:image`,
           content:
             image ||
             "https://shakhsiyah.netlify.app/assets/img/logo/logo-thumb.png",
         },
         {
           property: `twitter:image`,
           content:
             image ||
             "https://shakhsiyah.netlify.app/assets/img/logo/logo-thumb.png",
         },
         {
           name: `twitter:card`,
           content: `summary_large_image`,
         },
         {
           name: `twitter:creator`,
           content: ``,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ].concat(meta)}
     >
       <link
         href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700;800&family=serif:wght@300;400;500;600;700;800&display=swap"
         rel="stylesheet"
       />
     </Helmet>
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default Seo
 