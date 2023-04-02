import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const HeaderTop = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(filter: { title: { eq: "Header" } }) {
        nodes {
          id
          title
          content
        }
      }
    }
  `);

  const headerContent = data.allWpPost.nodes[0]?.content || '';

  const parseHtmlString = (htmlString) => {
    if (typeof window !== 'undefined' && window.DOMParser) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(htmlString, 'text/html');
      const content = htmlDoc.body.childNodes;
      const parsedContent = Array.from(content);

      const renderElement = (element, index, key) => {
        if (element.nodeType === Node.TEXT_NODE) {
          return element.textContent;
        }

        if (element.nodeType === Node.ELEMENT_NODE) {
          const tagName = element.tagName.toLowerCase();
          const children = Array.from(element.childNodes);

          if (tagName === 'strong') {
            return (
              <strong key={key}>
                {children.map((child, childIndex) =>
                  renderElement(child, childIndex, `${key}-child-${childIndex}`)
                )}
              </strong>
            );
          }

          if (tagName === 'code') {
            return (
              <span key={key}>
                {children.map((child, childIndex) =>
                  renderElement(child, childIndex, `${key}-child-${childIndex}`)
                )}
              </span>
            );
          }

          if (tagName === 'p') {
            return (
              <p key={key}>
                {children.map((child, childIndex) =>
                  renderElement(child, childIndex, `${key}-child-${childIndex}`)
                )}
              </p>
            );
          }
        }

        return null;
      };

      return parsedContent.map((node, index) =>
        renderElement(node, index, `header-top-${index}`)
      );
    }

    return null;
  };

  const [isActiveF, setActiveF] = useState(true);

  const handleToggleF = () => {
    setActiveF(!isActiveF);
  };

  const parsedContent = parseHtmlString(headerContent);

  return (
    <div className={` header-note-area p-relative d-none d-md-block ${isActiveF ? "eduman-header-notice-visible" : "eduman-header-notice-hide"}`}>
      <div className="container-fluid">
        <div className="note-text text-center">
          {parsedContent}
        </div>
      </div>
      <div className="eduman-header-notice-action-close">
        <button onClick={handleToggleF} aria-label="Close notification">
          <i className="fal fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
