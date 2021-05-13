import React from "react";
import { Box } from "rebass";

import { GoChevronRight } from "@react-icons/all-files/go/GoChevronRight";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3";
import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript";
import { SiMaterialUi } from "@react-icons/all-files/si/SiMaterialUi";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { DiMongodb } from "@react-icons/all-files/di/DiMongodb";
import { FaPython } from "@react-icons/all-files/fa/FaPython";
// Interesses Icon
import { SiAtom } from "@react-icons/all-files/si/SiAtom";
import { BsLayoutWtf } from "@react-icons/all-files/bs/BsLayoutWtf";
import { BiGame } from "@react-icons/all-files/bi/BiGame";
import { BiCodeAlt } from "@react-icons/all-files/bi/BiCodeAlt";
import { MdMovie } from "@react-icons/all-files/md/MdMovie";
import { FaPaintBrush } from "@react-icons/all-files/fa/FaPaintBrush";
import { AiOutlineGlobal } from "@react-icons/all-files/ai/AiOutlineGlobal";
import { MdSlowMotionVideo } from "@react-icons/all-files/md/MdSlowMotionVideo";
import { FaDice } from "@react-icons/all-files/fa/FaDice";

import Layout from "@layout/main";
import Line from "@components/Line";
import styled from "styled-components";

const PersonalSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: ${(props) => props.theme.space[2]}px;
  margin-bottom: ${(props) => props.theme.space[4]}px;
`;

const SkillSection = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${(props) => props.theme.space[3]}px;
  margin-top: ${(props) => props.theme.space[3]}px;
  margin-bottom: ${(props) => props.theme.space[4]}px;
`;

const SkillItem = styled.div`
  background-color: ${(props) => props.theme.colors.dark[700]};
  padding: ${(props) => props.theme.space[4]}px;
  border-radius: ${(props) => props.theme.space[1]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: ${(props) => props.theme.space[3]}px;
  grid-column: span 3;
  & svg {
    font-size: ${(props) => props.theme.fontSizes[7]};
  }
  & p {
    font-size: ${(props) => props.theme.fontSizes[3]};
    font-family: ${(props) => props.theme.fonts.text};
  }
`;

const HoobyItem = styled.div`
  background-color: ${(props) => props.theme.colors.dark[700]};
  display: flex;
  align-items: center;
  grid-gap: ${(props) => props.theme.space[3]}px;
  grid-column: span 4;
  padding: ${(props) => props.theme.space[3]}px
    ${(props) => props.theme.space[4]}px;
  & svg {
    font-size: ${(props) => props.theme.fontSizes[6]};
    color: ${(props) => props.color};
  }
  & p {
    font-size: ${(props) => props.theme.fontSizes[3]};
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 700;
  }
`;

const PersonalInfo = styled.div``;

const PersonalTitle = styled.div`
  margin-bottom: ${(props) => props.theme.space[4]}px;
`;
const PTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes[6]};
  font-family: ${(props) => props.theme.fonts.serif};
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.font.title};
  margin-bottom: ${(props) => props.theme.space[2]}px;
`;
const PSubtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${(props) => props.theme.fonts.text};
  font-style: italic;
`;

const List = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${(props) => props.theme.space[3]}px;
  margin-bottom: ${(props) => props.theme.space[4]}px;
`;

const ListItemStyle = styled.li`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes[2]};
  color: ${(props) => props.theme.colors.dark[200]};
  & span {
    font-weight: 700;
    margin-right: ${(props) => props.theme.space[2]}px;
    color: ${(props) => props.theme.colors.dark[100]};
  }
`;

const Icon = styled(GoChevronRight)`
  fill: ${(props) => props.theme.colors.primary[400]};
`;

const ListItem = (props) => (
  <ListItemStyle>
    <Icon />
    {props.children}
  </ListItemStyle>
);

const Place = styled(Box)`
  background-color: ${(props) => props.theme.colors.dark[700]};
  height: 300px;
`;

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${(props) => props.theme.fonts.text};
  line-height: 1.5;
`;
const About = ({ location }) => {
  const skillItem = [
    {
      text: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      text: "CSS3",
      icon: <FaCss3 />,
    },
    {
      text: "Javascript",
      icon: <IoLogoJavascript />,
    },
    {
      text: "Material-UI",
      icon: <SiMaterialUi />,
    },
    {
      text: "React",
      icon: <FaReact />,
    },
    {
      text: "NodeJS",
      icon: <FaNodeJs />,
    },
    {
      text: "MongoDB",
      icon: <DiMongodb />,
    },
    {
      text: "Python",
      icon: <FaPython />,
    },
  ];

  const listaInteresses = [
    {
      id: 1,
      text: "Tecnologia Web",
      icon: <BiCodeAlt />,
      color: "#3498db",
    },
    {
      id: 2,
      text: "UI/UX Design",
      icon: <BsLayoutWtf />,
      color: "#9b59b6",
    },
    {
      id: 3,
      text: "Jogos & Game design",
      icon: <BiGame />,
      color: "#f1c40f",
    },
    {
      id: 4,
      text: "Ciência & Tecnologia",
      icon: <SiAtom />,
      color: "#22b8cf",
    },
    {
      id: 5,
      text: "Filmes & Series",
      icon: <MdMovie />,
      color: "#f03e3e",
    },
    {
      id: 6,
      text: "Artes & Ilustrações",
      icon: <FaPaintBrush />,
      color: "#fd7e14",
    },
    {
      id: 7,
      text: "Relações internacionais",
      icon: <AiOutlineGlobal />,
      color: "#e64980",
    },
    {
      id: 8,
      text: "Animações",
      icon: <MdSlowMotionVideo />,
      color: "#74c0fc",
    },
    {
      id: 9,
      text: "RPG & Board Games",
      icon: <FaDice />,
      color: "#40c057",
    },
  ];
  return (
    <Layout location={location} title="Um pouco sobre mim">
      <PersonalSection>
        <Place alt="image" />
        <PersonalInfo>
          <PersonalTitle>
            <PTitle>Desenvolvedor Fullstack javascript</PTitle>
            <PSubtitle>Yeap Yeap test</PSubtitle>
          </PersonalTitle>
          <List>
            <ListItem>
              <span>Website:</span> www.example.com
            </ListItem>
            <ListItem>
              <span>Website:</span> www.example.com
            </ListItem>
            <ListItem>
              <span>Website:</span> www.example.com
            </ListItem>
            <ListItem>
              <span>Website:</span> www.example.com
            </ListItem>
            <ListItem>
              <span>Website:</span> www.example.com
            </ListItem>
            <ListItem>
              <span>Website:</span> www.example.com
            </ListItem>
          </List>
          <Paragraph>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </Paragraph>
        </PersonalInfo>
      </PersonalSection>
      <Line right>Habilidades</Line>
      <SkillSection>
        {skillItem.map((item, index) => (
          <SkillItem key={index}>
            {item.icon}
            <p>{item.text}</p>
          </SkillItem>
        ))}
      </SkillSection>
      <Line right>Interesses</Line>
      <SkillSection>
        {listaInteresses.map((item, index) => (
          <HoobyItem key={index} color={item.color}>
            {item.icon}
            <p>{item.text}</p>
          </HoobyItem>
        ))}
      </SkillSection>
    </Layout>
  );
};

export default About;