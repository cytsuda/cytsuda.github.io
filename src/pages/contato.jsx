import React from "react";
import styled from "styled-components";

import Layout from "@layout/main";
import InfoBox from "@components/InfoBox";
import Formulario from "@components/Formulario";
import SocialMedia from "@components/SocialMedia";

import { ImLocation } from "@react-icons/all-files/im/ImLocation";
import { ImShare2 } from "@react-icons/all-files/im/ImShare2";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { ImWhatsapp } from "@react-icons/all-files/im/ImWhatsapp";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${(props) => props.theme.space[3]}px;
  margin-bottom: ${(props) => props.theme.space[3]}px;
  height: 100%;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormContainer = styled(Formulario)`
  grid-row: span 5;
  flex: 1;
`;

const Contato = (props) => {
  const { location } = props;
  return (
    <Layout location={location} title="Find me">
      <Grid>
        {information.map((item, index) => (
          <InfoBox icon={item.icon} title={item.title} key={index}>
            {item.text}
          </InfoBox>
        ))}
      </Grid>
      <FormContainer form={form} />
    </Layout>
  );
};

export default Contato;

const information = [
  {
    icon: <ImLocation />,
    title: "Localização",
    text: "São José do Rio Preto, SP, Brasil",
  },
  {
    icon: <ImShare2 />,
    title: "Social Media",
    text: <SocialMedia />,
  },
  {
    icon: <HiOutlineMail />,
    title: "Email",
    text: "span_email",
  },
  {
    icon: <ImWhatsapp />,
    title: "Whatsapp",
    text: "span_email",
  },
];

const form = {
  nome: "",
  email: "",
  assunto: "",
  mensagem: "",
};
