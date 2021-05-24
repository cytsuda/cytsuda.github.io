import React from "react";
import styled, { css } from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";
import { graphql } from "gatsby";
import Layout from "@layout/main";
import NotFoundImage from "@images/404.svg";
import produce from "immer";
import { Box } from "rebass";

import { GoChevronRight } from "@react-icons/all-files/go/GoChevronRight";
import { BsFillXDiamondFill } from "@react-icons/all-files/bs/BsFillXDiamondFill";
import { BsXDiamond } from "@react-icons/all-files/bs/BsXDiamond";

const Container = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.space[3]}px;
  row-gap: ${(props) => props.theme.space[5]}px;
  grid-template-columns: repeat(2, 1fr);
`;
const StyledBox = styled(Box)`
  font-family: ${(props) => props.theme.fonts.text};
`;

const Image = styled.img`
  width: 80%;
  margin-right: auto;
`;
const InfoBox = styled.div`
  padding: ${(props) => props.theme.space[3]}px;
  font-family: ${(props) => props.theme.fonts.text};
`;

const Mensagem = styled.p`
  font-size: ${(props) => props.theme.fontSizes[4]};
  margin-bottom: ${(props) => props.theme.space[3]}px;
  & b {
    font-weight: 600;
    color: ${(props) => props.theme.colors.danger[500]};
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  grid-gap: ${(props) => props.theme.space[3]}px;
  margin-bottom: ${(props) => props.theme.space[4]}px;
`;

const ListItemStyle = styled.li`
  display: flex;
  align-items: center;
  grid-gap: ${(props) => props.theme.space[2]}px;
  color: ${(props) => props.theme.colors.dark[400]};
`;

const ListItem = (props) => {
  return (
    <ListItemStyle>
      <GoChevronRight /> {props.children}
    </ListItemStyle>
  );
};

const Link = styled(TransitionLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.dark[300]};
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-family: ${(props) => props.theme.fonts.menu};
  display: flex;
  grid-gap: ${(props) => props.theme.space[2]}px;
  align-items: center;
  transition: all 0.2s linear;
  & svg {
    font-size: ${(props) => props.theme.fontSizes[1]};
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary[100]};
  }
`;

const SiteMap = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: ${(props) => props.theme.space[2]}px;
  margin-top: ${(props) => props.theme.space[3]}px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubMenu = styled.div`
  margin-left: ${(props) => props.theme.space[3]}px;
  margin-top: ${(props) => props.theme.space[2]}px;
`;

const Bottom = styled.div`
  display: flex;
  grid-gap: ${(props) => props.theme.space[3]}px;
  margin-bottom: ${props=>props.theme.space[5]}px;
`;

const ButtonStyle = css`
  text-decoration: none;
  padding: ${(props) => props.theme.space[2] + 6}px
    ${(props) => props.theme.space[4]}px ${(props) => props.theme.space[2]}px;
  border-radius: 2px;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes[2]};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.menu};
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s linear;
  border: ${(props) =>
    props.outlined
      ? `1px solid ${props.theme.colors.primary[500]}`
      : "1px solid transparent"};
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.theme.colors.primary[500]};
  color: ${(props) =>
    props.outlined
      ? props.theme.colors.primary[500]
      : props.theme.colors.dark[100]};

  &:hover {
    border: ${(props) =>
      !props.outlined
        ? `1px solid ${props.theme.colors.primary[300]}`
        : `1px solid ${props.theme.colors.dark[100]}`};
    background-color: ${(props) =>
      !props.outlined
        ? props.theme.colors.primary[700]
        : props.theme.colors.dark[500]};
    color: ${(props) =>
      !props.outlined
        ? props.theme.colors.dark[100]
        : props.theme.colors.dark[100]};
  }
`;
const Button = styled.button`
  ${ButtonStyle};
`;
const LinkButton = styled(TransitionLink)`
  ${ButtonStyle};
`;

const NotFound = (props) => {
  const { location,transitionStatus } = props;
  const local = { pathname: "/Erro 404" };
  const { data } = props;
  const projetos = data.allSitePage.edges;
  const pages = normalizeFunction(projetos);
  return (
    <Layout location={local} title="Página não encontrada" transitionStatus={transitionStatus}>
      <Container>
        <Image src={NotFoundImage} />
        <InfoBox>
          <Mensagem>
            A página <b>{location.pathname}</b> que você deseja acessar não foi
            encontrada.
          </Mensagem>
          <Mensagem>Talvez você esteja aqui por conta de:</Mensagem>
          <List>
            <ListItem>A página foi movida</ListItem>
            <ListItem>A página não existe mais</ListItem>
            <ListItem>Você digitou o endereço errado.</ListItem>
            <ListItem>A página nunca existiu, tudo foi um sonho.</ListItem>
          </List>
          <Bottom>
            <LinkButton to="/">Página inicial</LinkButton>
            <Button outlined onClick={() => window.history.back()}>
              Voltar
            </Button>
          </Bottom>

          <StyledBox>
            <Mensagem>Segue abaixo o mapa do site caso</Mensagem>
            <SiteMap>
              {pages.map((item, index) => (
                <>
                  {item.name !== "404" && (
                    <Menu key={index}>
                      <Link to={item.path}>
                        <BsFillXDiamondFill />
                        {item.name}
                      </Link>
                      {item.children &&
                        item.children.length > 0 &&
                        item.children.map((el) => (
                          <SubMenu>
                            <Link to={el.path}>
                              <BsXDiamond />
                              {el.name}
                            </Link>
                          </SubMenu>
                        ))}
                    </Menu>
                  )}
                </>
              ))}
            </SiteMap>
          </StyledBox>
        </InfoBox>
      </Container>
    </Layout>
  );
};

export default NotFound;

export const query = graphql`
  {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

const normalizeFunction = (array) => {
  const setControl = new Set();
  let result = [];
  array.forEach((item) => {
    const path = item.node.path
      .slice(1)
      .split("/")
      .filter((el) => el !== "");
    if (path.length === 0) {
      result = produce(result, (draft) => {
        draft.push({
          name: "Home",
          path: "/",
          children: null,
        });
      });
    } else if (
      setControl.has(path[0]) ||
      (path[0].includes("404") && setControl.has("404"))
    ) {
      if (!path[0].includes("404") && path.length > 1) {
        const foundIndex = result.findIndex(
          (item) => item.name.toLowerCase() === path[0]
        );
        result = produce(result, (draft) => {
          draft[foundIndex].children.push({
            name: path[1].charAt(0).toUpperCase() + path[1].slice(1),
            path: `/${path.join("/")}/`,
            fullPath: item.node.path,
          });
        });
      }
    } else {
      setControl.add(path[0].includes("404") ? "404" : path[0]);
      result = produce(result, (draft) => {
        let children = {};
        if (path.length > 1) {
          children = {
            name: path[1].charAt(0).toUpperCase() + path[1].slice(1),
            path: `/${path.join("/")}/`,
            fullPath: item.node.path,
          };
        }
        draft.push({
          name: path[0].includes("404")
            ? "404"
            : path[0].charAt(0).toUpperCase() + path[0].slice(1),
          path: path[0].includes("404") ? "/404" : `/${path[0]}`,
          children: Object.keys(children).length !== 0 ? [children] : [],
        });
      });
    }
  });
  result = result.slice();
  result = result.sort((a, b) => {
    if (a.name === "404") return 1;
    if (b.name === "404") return -1;
    if (a.path.length > b.path.length) {
      return 1;
    }
    if (a.path.length < b.path.length) {
      return -1;
    }
    return 0;
  });
  return result;
};
