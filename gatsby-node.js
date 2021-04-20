const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`./src/templates/project/project.jsx`);

  const projects = [
    {
      title: "Project #1",
      slug: "project-1",
    },
    {
      title: "Project #2",
      slug: "project-2",
    },
    {
      title: "Project #3",
      slug: "project-3",
    },
    {
      title: "Project #4",
      slug: "project-4",
    },
  ];

  const createProjectPage = (project, index) => {
    const next = projects[index === projects.length - 1 ? 0 : index + 1];
    createPage({
      path: `/projects/${project.slug}`,
      component: projectTemplate,
      context: {
        ...project,
        next,
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
        "@layout": path.resolve(__dirname, "src/layout"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@templates": path.resolve(__dirname, "src/templates"),
      },
    },
  });
};
