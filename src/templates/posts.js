import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query AllPosts {
    allWpPost {
      nodes {
        id
        title
        slug
        excerpt
        content
      }
    }
  }
`;

const Posts = ({ data }) => {
  const posts = data.allWpPost.nodes;

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <a href={`/post/${post.slug}`}>Read more</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
