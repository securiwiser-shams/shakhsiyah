/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
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
            "https://raw.githubusercontent.com/shakhsiyah/shakhsiyah/60fe6f0dcbb0e9d6797765f5631c6e62aaeddf54/logo-share.png?token=GHSAT0AAAAAACAEBPNHL2VQ5YNEYUZFEQM6ZATFS4Q",
        },
        {
          property: `twitter:image`,
          content:
            image ||
            "https://raw.githubusercontent.com/shakhsiyah/shakhsiyah/60fe6f0dcbb0e9d6797765f5631c6e62aaeddf54/logo-share.png?token=GHSAT0AAAAAACAEBPNHL2VQ5YNEYUZFEQM6ZATFS4Q",
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
    ></Helmet>
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
