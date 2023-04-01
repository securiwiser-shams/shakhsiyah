/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      node: {
        fs: "empty",
      },
      resolve: {
        fallback: {
          path: require.resolve('path-browserify'),
        },
      },
    });
  };


  exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const result = await graphql(`
      {
        allWpPost {
          nodes {
            id
            slug
          }
        }
      }
    `);
  
    if (result.errors) {
      console.error(result.errors);
      return;
    }
  
    const posts = result.data.allWpPost.nodes;
  
    posts.forEach((post) => {
      createPage({
        path: `/post/${post.slug}`,
        component: require.resolve("./src/templates/posts.js"),
        context: {
          id: post.id,
        },
      });
    });
  };
  
