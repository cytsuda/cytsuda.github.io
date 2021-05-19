import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MdOpenInNew } from "@react-icons/all-files/md/MdOpenInNew";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";

import Tag from "@components/Tag";

const Container = styled(Flex)`
  grid-gap: ${(props) => props.theme.space[4]}px;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-gap: -${(props) => props.theme.space[0]}px;
    flex-direction: column;
  }
`;

const Title = styled(Heading)`
  color: ${(props) => props.theme.colors.primary[500]};
  font-family: ${(props) => props.theme.fonts.serif};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes[7]};
  margin: 0;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    background: ${(props) => props.theme.colors.backgroundComp};
    display: inline-block;
    width: auto;
    align-self: flex-start;
    padding-top: ${(props) => props.theme.space[2]}px;
    padding-right: ${(props) => props.theme.space[4]}px;
  }
`;

const HeroWrap = styled(Box)`
  flex: 1;
  ${(props) =>
    props.truncated &&
    css`
      max-height: 200px;
      overflow: hidden;
    `}
`;
const Hero = ({ photo, truncated }) => {
  const image = getImage(photo);
  return (
    <HeroWrap mt={[2, 3]} truncated={truncated}>
      <WrapImage image={image} alt="featurephoto" />
    </HeroWrap>
  );
};

const InfoBox = styled(Flex)`
  flex: 1;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: -${(props) => props.theme.space[4]}px !important;
    z-index: 1;
    width: 100% !important;
  }
`;

const WrapImage = styled(GatsbyImage)`
  width: 100%;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-height: 250px;
  }
`;

const Subtitle = styled(Text)`
  color: ${(props) => props.theme.colors.dark[400]};
  font-family: ${(props) => props.theme.fonts.italic};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin-top: ${(props) => props.theme.space[1]}px;
  margin-bottom: ${(props) => props.theme.space[3]}px;
  letter-space: 1px;
`;

const Categories = styled(Flex)`
  grid-gap: ${(props) => props.theme.space[2]}px;
`;

const Description = styled(Text)`
  color: ${(props) => props.theme.colors.dark[100]};
  font-family: ${(props) => props.theme.fonts.text};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes[3]}px;
  line-height: 1.5;
  margin: 0;
`;

const Links = styled.div`
  grid-gap: ${(props) => props.theme.space[3]}px;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: ${(props) => props.theme.space[4]}px;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  display: flex;
  min-height: 40px;
  padding: ${(props) => props.theme.space[2]}px
    ${(props) => props.theme.space[4]}px;
  background-color: ${(props) =>
    props.type === "live"
      ? props.theme.colors.info[500]
      : props.theme.colors.dark[600]};
  grid-gap: ${(props) => props.theme.space[2]}px;
  border-radius: ${(props) => props.theme.space[1]}px;
  transition: all 0.2s ease;

  color: ${(props) => props.theme.colors.dark[100]};
  font-size: ${(props) => props.theme.fontSizes[4]};
  text-decoration: none;
  & span {
    font-size: ${(props) => props.theme.fontSizes[3]};
    font-family: ${(props) => props.theme.fonts.menu};
    margin-top: ${(props) => props.theme.space[1]}px;
  }
  &:hover {
    background-color: ${(props) =>
      props.type === "live"
        ? props.theme.colors.info[600]
        : props.theme.colors.dark[500]};
    transform: translate(2px, -4px);
    box-shadow: -2px 4px
      ${(props) =>
        props.type === "live"
          ? rgba(props.theme.colors.info[500], 0.5)
          : rgba(props.theme.colors.dark[400], 0.5)};
  }
  &:active {
    transform: translate(0, 0);
    box-shadow: -0px 0px
      ${(props) =>
        props.type === "live"
          ? rgba(props.theme.colors.info[500], 0.5)
          : rgba(props.theme.colors.dark[400], 0.5)};
  }
`;

const ProjectHeader = ({ project, truncated }) => {
  return (
    <Container>
      <Hero width={1 / 2} photo={project.featuredphoto} truncated={truncated} />
      <InfoBox flexDirection="column" width={1 / 2} mt={[2, 3]}>
        <Title as="h1">{project.title}</Title>
        <Subtitle as="h3">{project.subtitle}</Subtitle>
        <Categories mb={4}>
          {project.categories.map((item, index) => (
            <Tag key={index}>{item.title}</Tag>
          ))}
        </Categories>
        <Description as="h2">{project.description}</Description>
        <Links>
          <Link href={project.livePage} target="_blank" type="live">
            <MdOpenInNew />
            <span>Página online</span>
          </Link>
          <Link href={project.githubPage} target="_blank">
            <AiOutlineGithub />
            <span>Repositório Github</span>
          </Link>
        </Links>
      </InfoBox>
    </Container>
  );
};

export default ProjectHeader;
