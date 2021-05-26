import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { Box } from "rebass";
import TransitionLink from "gatsby-plugin-transition-link";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tag from "@components/Tag";

import { MdOpenInNew } from "@react-icons/all-files/md/MdOpenInNew";
import { MdInfoOutline } from "@react-icons/all-files/md/MdInfoOutline";
import { GrGithub } from "@react-icons/all-files/gr/GrGithub";

const Hover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${(props) => rgba(props.theme.colors.dark[800], 0.98)};
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: ${(props) => props.theme.space[3]}px;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.9);
  transition: all 0.4s ease-in-out;
  &::after,
  &::before {
    content: "";
    height: ${(props) => props.theme.space[5]}px;
    width: ${(props) => props.theme.space[5]}px;
    position: absolute;
  }
  &::after {
    top: ${(props) => props.theme.space[3]}px;
    left: ${(props) => props.theme.space[3]}px;
    border-left: 3px solid ${(props) => props.theme.colors.dark[200]};
    border-top: 3px solid ${(props) => props.theme.colors.dark[200]};
  }
  &::before {
    bottom: ${(props) => props.theme.space[3]}px;
    right: ${(props) => props.theme.space[3]}px;
    border-right: 3px solid ${(props) => props.theme.colors.dark[200]};
    border-bottom: 3px solid ${(props) => props.theme.colors.dark[200]};
  }
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    grid-gap: ${(props) => props.theme.space[2]}px;
    &,
    &::after,
    &::before {
      border-width: 2px;
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    grid-gap: ${(props) => props.theme.space[1]}px;
  }
`;

const Container = styled(Box)`
  border: 3px solid white;
  position: relative;
  box-radius: 25px;
  oveflow: hidden;
  &:hover ${Hover} {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    border-width: 2px;
  }
`;

const ImageBox = styled(GatsbyImage)`
  height: 100%;
`;

const Title = styled.h4`
  font-family: ${(props) => props.theme.fonts.serif};
  font-size: ${(props) => props.theme.fontSizes[5]};
  margin-bottom: ${(props) => props.theme.space[2]}px;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: ${(props) => props.theme.fontSizes[4]};
  }
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: ${(props) => props.theme.space[2]}px;
  margin-bottom: ${(props) => props.theme.space[2]}px;
  max-width: 80%;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  grid-gap: ${(props) => props.theme.space[4]}px;
`;

const LinkStyles = css`
  font-size: ${(props) => props.theme.fontSizes[5]};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary[500]};
  }
`;

const Link = styled(TransitionLink)`
  ${LinkStyles}
`;
const ExternalLink = styled.a`
  ${LinkStyles}
`;

const ImageHover = (props) => {
  const { project } = props;
  const image = getImage(project.featuredphoto.gatsbyImageData);
  return (
    <Container>
      <ImageBox image={image} alt={project.featuredphoto.alt} />
      <Hover>
        <Title>{project.title}</Title>
        <Categories>
          {project.categories.map((item, index) => (
            <Tag key={index}>{item.title}</Tag>
          ))}
        </Categories>
        <Links>
          <Link to={`/portifolio/${project.slug}`}>
            <MdInfoOutline />
          </Link>
          <ExternalLink target="_blank" href={project.livePage}>
            <MdOpenInNew />
          </ExternalLink>
          <ExternalLink target="_blank" href={project.githubPage}>
            <GrGithub />
          </ExternalLink>
        </Links>
      </Hover>
    </Container>
  );
};

export default ImageHover;

/*
<Box>
        <GatsbyImage
          image={image}
          alt={project.slug + "-featuredphoto"}
          objectFit="cover"
        />
        <Box mt={3}>
          <Description>{project.title}</Description>
        </Box>
      </Box>
*/
