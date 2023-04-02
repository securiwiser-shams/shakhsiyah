import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { parse } from 'node-html-parser';

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
  const [parsedContent, setParsedContent] = useState([]);

  useEffect(() => {
    const parseHtmlString = (htmlString) => {
      const htmlDoc = parse(htmlString);
      const content = htmlDoc.childNodes;
      const parsedContent = Array.from(content);

      const renderElement = (element, index) => {
        if (element.nodeType === 3) { // check if it's a text node
          return element.rawText;
        }
        if (element.nodeType === 1) { // check if it's an element node
          const tagName = element.tagName.toLowerCase();
          const children = Array.from(element.childNodes);
          if (tagName === 'strong') {
            return (
              <strong key={index}>
                {children.map((child, childIndex) => renderElement(child, childIndex))}
              </strong>
            );
          }
          if (tagName === 'code') {
            return (
              <span key={index} >
                {children.map((child, childIndex) => renderElement(child, childIndex))}
              </span>
            );
          }
          if (tagName === 'p') {
            return (
              <p key={index}>
                {children.map((child, childIndex) => renderElement(child, childIndex))}
              </p>
            );
          }
        }
        return null;
      };

      return parsedContent.map((node, index) => renderElement(node, index));
    };

    setParsedContent(parseHtmlString(headerContent));
  }, [headerContent]);

  const [isActiveF, setActiveF] = useState(true);

  const handleToggleF = () => {
    setActiveF(!isActiveF);
  };

  return (
    <div className={`header-note-area p-relative d-none d-md-block ${isActiveF ? "eduman-header-notice-visible" : "eduman-header-notice-hide"}`}>
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
