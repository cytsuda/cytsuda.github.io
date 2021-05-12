const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`./src/templates/portifolio/port.jsx`);

  const query = `{
    projects:allDatoCmsProject {
      edges {
        node {
          title
          slug
          description
        }
        next {
          slug
        }
      }
    }
  }`;

  const result = await graphql(query);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const projects = result.data.projects.edges;

  const createProjectPage = (project) => {
    const next = project.next || projects[0].node;
    createPage({
      path: `/portifolio/${project.node.slug}`,
      component: projectTemplate,
      context: {
        nextSlug: next.slug,
        ...project.node,
      },
    });
  };

  projects.forEach(createProjectPage);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@layout": path.resolve(__dirname, "src/layout"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@templates": path.resolve(__dirname, "src/templates"),
      },
    },
  });
};
