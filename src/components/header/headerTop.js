import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { parse } from 'node-html-parser';

const HeaderTop = () => {
  const data = useStaticQuery(graphql`
  query {
    allWpPage(filter: { title: { eq: "Header" } }) {
      nodes {
        id
        title
        content
      }
    }
  }
  `);

  const headerContent = data.allWpPage.nodes[0].content || '';
  const [parsedContent, setParsedContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const parseHtmlString = (htmlString) => {
        const root = parse(htmlString);
        const parsedContent = root.childNodes.map(node => {
          if (node.nodeType === 1) { // Node.ELEMENT_NODE
            const tagName = node.tagName.toLowerCase();
            const children = node.childNodes.map(childNode => parseHtmlString(childNode));
            if (tagName === 'strong') {
              return <strong key={node.id}>{children}</strong>;
            }
            if (tagName === 'code') {
              return <span key={node.id}>{children}</span>;
            }
            if (tagName === 'p') {
              return <p key={node.id}>{children}</p>;
            }
          } else if (node.nodeType === 3) { // Node.TEXT_NODE
            return node.text;
          }
          return null;
        }).filter(node => node !== null);
      
        return parsedContent;
      };
      
    const parsed = parseHtmlString(headerContent);
    setParsedContent(parsed);
    setLoading(false);
  }, [headerContent]);

  const [isActiveF, setActiveF] = useState(true);
  const handleToggleF = () => {
    setActiveF(!isActiveF);
  };

  if (loading) {
    return null; // render nothing while loading
  }

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
