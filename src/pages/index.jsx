import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Box } from "rebass";
import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

import Layout from "@layout/main";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.space[3]}px;
`;

const NavLinks = styled(TransitionLink)`
  text-decoration: none;
  color: inherit;
`;

const ProjectGridItem = ({ project }) => {
  const image = getImage(project.featuredphoto);
  return (
    <NavLinks to={`/projects/${project.slug}`}>
      <Box>
        <GatsbyImage
          image={image}
          alt={project.slug + "-featuredphoto"}
          objectFit="cover"
        />
      </Box>
    </NavLinks>
  );
};

const Home = ({ data, location }) => {
  const projects = data.projects.edges;
  return (
    <Layout location={location}>
      Home Page
      <Grid>
        {projects.map((project) => (
          <ProjectGridItem key={project.node.title} project={project.node} />
        ))}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  {
    projects: allDatoCmsProject {
      edges {
        node {
          title
          slug
          featuredphoto {
            gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.6)
          }
        }
      }
    }
  }
`;

export default Home;
