import React from "react";
import { graphql } from "gatsby";
import { TransitionState } from "gatsby-plugin-transition-link";

import Layout from "@layout/main";
import Line from "@components/Line";

import ProjectHeader from "@templates/portifolio/header";
import ProjectContent from "@templates/portifolio/content";

const ProjectInner = ({ state, project, location }) => {
  console.log("project");
  const { transitionStatus } = state;
  return (
    <Layout
      transitionStatus={transitionStatus}
      location={location}
      title={"Showcase: " + project.title}
    >
      <ProjectHeader project={project} />
      <Line mt={5} mb={4}>
        Imagens
      </Line>
      <ProjectContent photos={project.photos} />
    </Layout>
  );
};

const Project = ({
  pageContext: projectShell,
  data,
  location,
  transitionStatus,
}) => {
  const { next, project } = data;
  const wrapProject = {
    ...projectShell,
    ...project,
    next,
  };
  return (
    <TransitionState>
      {(transitionStatus) => (
        <ProjectInner
          location={location}
          state={transitionStatus}
          project={wrapProject}
        />
      )}
    </TransitionState>
  );
};

export const query = graphql`
  query($slug: String!, $nextSlug: String!) {
    project: datoCmsProject(slug: { eq: $slug }) {
      description
      slug
      subtitle
      title
      livePage
      githubPage
      categories {
        title
      }
      featuredphoto {
        gatsbyImageData(placeholder: BLURRED)
        alt
        title
      }
      photos {
        gatsbyImageData(placeholder: BLURRED)
        alt
        title
      }
    }
    next: datoCmsProject(slug: { eq: $nextSlug }) {
      title
      slug
      description
      featuredphoto {
        gatsbyImageData(placeholder: BLURRED)
        alt
        title
      }
    }
  }
`;

export default Project;
