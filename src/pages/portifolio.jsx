import React from "react";
import { graphql } from "gatsby";
import { Box } from "rebass";
import styled from "styled-components";

import ImageHover from "@components/ImageHover";
import Layout from "@layout/main";
import Tag from "@components/Tag";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.space[4]}px;
`;

const Tags = styled.div`
  display: flex;
  grid-gap: ${(props) => props.theme.space[2]}px;
  margin-bottom: ${(props) => props.theme.space[4]}px;
`;
const Projects = ({ data, location }) => {
  const projects = data.projects.edges;
  const categoriesSets = new Set();
  projects.forEach((item) => {
    item.node.categories.forEach((cat) => {
      categoriesSets.add(cat.title);
    });
  });
  const cat = Array.from(categoriesSets);
  return (
    <Layout location={location} title="Check this shit!">
      <Tags>
        {cat.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </Tags>
      <Grid>
        {projects.map((project) => (
          <ImageHover key={project.node.id} project={project.node} />
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
          slug
          subtitle
          categories {
            title
          }
          id
          livePage
          githubPage
          description
          title
          featuredphoto {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
        }
      }
    }
  }
`;

export default Projects;
