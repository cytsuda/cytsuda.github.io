import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Alert from "@components/Alert";

import { CgSpinnerTwo } from "@react-icons/all-files/cg/CgSpinnerTwo";
import { CgBlock } from "@react-icons/all-files/cg/CgBlock";
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline";
import { IoMdAlert } from "@react-icons/all-files/io/IoMdAlert";

const Container = styled(Form)`
  padding: ${(props) => props.theme.space[4]}px;
  background-color: ${(props) => props.theme.colors.backgroundInt};
`;

const Input = styled(Field)`
  outline: none;
  padding: ${(props) => props.theme.space[2]}px
    ${(props) => props.theme.space[3]}px;
  background-color: ${(props) => rgba(props.theme.colors.dark[500], 0.5)};
  color: ${(props) => props.theme.colors.dark[300]};
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-family: ${(props) => props.theme.fonts.text};
  border-radius: 2px;
  border: 1px solid transparent;
  resize: none;
  &::placeholder {
    color: ${(props) => rgba(props.theme.colors.dark[400], 0.25)};
  }
  &:disabled {
    color: ${(props) => props.theme.colors.dark[300]};
    border-color: ${(props) => props.theme.colors.dark[300]};
    animation: ${(props) => animation(props.theme.colors.dark[100])} 1s
      ease-in-out infinite;
  }
`;

const InputWraper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  grid-gap: ${(props) => props.theme.space[1]}px;

  margin-bottom: ${(props) => props.theme.space[3] + 6}px;
  color: ${(props) =>
    props.error
      ? props.theme.colors.danger[500]
      : props.theme.colors.dark[400]};

  & ${Input} {
    border-color: ${(props) => props.error && props.theme.colors.danger[500]};
  }
`;

const Label = styled.label`
  font-size: ${(props) => props.theme.fontSizes[1]};
  font-family: ${(props) => props.theme.fonts.text};
  color: inherit;
  text-transform: uppercase;
  font-weight: 200;
`;

const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes[0]};
  bottom: calc(-1 * ${(props) => props.theme.fontSizes[0]} - 4px);
  color: ${(props) => props.theme.colors.danger[500]};
`;

const Bottom = styled.div`
  grid-gap: ${(props) => props.theme.space[3]}px;
  ${(props) => props.outline}
  margin-top: ${(props) => props.theme.space[2]}px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const animation = (color) => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${rgba(color, 0.7)};
  }

  70% {
    box-shadow: 0 0 0 5px ${rgba(color, 0)};
  }

  100% {
    box-shadow: 0 0 0 0 ${rgba(color, 0)};
  }
`;
// ${(props) => rgba(props.theme.colors.primary[500], 0.7)}
const Button = styled.button`
  width: 160px;
  height: 40px;
  font-family: ${(props) => props.theme.fonts.text};
  font-size: ${(props) => props.theme.fontSizes[2]};
  background-color: ${(props) =>
    props.outline ? "transparent" : props.theme.colors.primary[500]};
  color: ${(props) =>
    props.outline
      ? props.theme.colors.primary[500]
      : props.theme.colors.dark[900]};
  border-radius: ${(props) => props.theme.space[1]}px;
  font-weight: 600;
  letter-spacing: 1px;
  border: 1px solid ${(props) => props.theme.colors.primary[500]};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: ${(props) => props.theme.space[2]}px;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.dark[100]};
  }
  &:hover,
  &:focus {
    color: ${(props) =>
      props.outline
        ? props.theme.colors.primary[500]
        : props.theme.colors.dark[900]};
    background-color: ${(props) =>
      props.outline ? "transparent" : props.theme.colors.primary[300]};
    animation: ${(props) => animation(props.theme.colors.primary[500])} 1s
      ease-in-out infinite;
    &:disabled {
      animation: none;
    }
  }
  &:active {
    outline: none;
  }
  &:disabled {
    background-color: ${(props) =>
      props.outline ? "transparent" : props.theme.colors.primary[500]};
    ${(props) =>
      props.outline
        ? css`
            color: ${(props) => props.theme.colors.dark[400]};
            border-color: ${(props) => props.theme.colors.dark[400]};
            cursor: not-allowed;
          `
        : css`
            cursor: no-drop;
            background-color: ${(props) => props.theme.colors.dark[500]};
            color: ${(props) => props.theme.colors.dark[100]};
            border: 1px solid transparent;
            outline: none;
            animation: none;
          `}
    ${(props) =>
      props.submitting &&
      !props.outline &&
      css`
        width: 60px;
        cursor: wait;
      `}
  }
`;

const spinner = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const IconStyle = (props) => {
  const { Icon, spinner, className } = props;
  return <Icon className={className} spinner={spinner} />;
};

const IconWrapper = styled(IconStyle)`
  font-size: ${(props) => props.theme.fontSizes[4]};
  ${(props) =>
    props.spinner &&
    css`
      animation: ${spinner} 0.75s ease-in-out infinite;
    `}
`;

const Formulario = (props) => {
  const [submit, setSubmit] = useState({ type: "", msg: "" });
  const [testing, setTesting] = useState("");
  const { form } = props;
  return (
    <Formik
      initialValues={form}
      validate={(values) => {
        const errors = {};
        if (!values.nome) {
          errors.nome = "Obrigatório";
        }
        if (!values.email) {
          errors.email = "Obrigatório";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Email inválido";
        }
        if (!values.assunto) {
          errors.assunto = "Obrigatório";
        }
        if (!values.mensagem) {
          errors.mensagem = "Obrigatório";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contato", ...values }),
        })
          .then((resposta) => {
            resetForm(form);
            if (resposta.status !== 200) {
              setSubmit({
                type: "falha",
                msg: resposta,
              });
              console.log(resposta);
            } else {
              setSubmit({
                type: "sucesso",
                msg: resposta,
              });
            }
          })
          .catch((error) => {
            resetForm(form);
            setSubmit({
              type: "falha",
              msg: error,
            });
            console.log("Error");
            console.log(error);
          });
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Container data-netlify="true" name="contato" method="post">
          <input type="hidden" name="form-name" value="contato" />
          <h1>Testing: {` > ` + testing + ` < `} </h1>
          <Alert
            variant="info"
            setClose={() => setSubmit({ type: "", msg: "" })}
            open={submit.type !== "" && submit.type === "sucesso"}
          >
            <IconWrapper Icon={IoMdCheckmarkCircleOutline} />
            <span>Mensagem enviada com sucesso.</span>
          </Alert>
          <Alert
            variant="danger"
            setClose={() => setSubmit({ type: "", msg: "" })}
            open={submit.type !== "" && submit.type === "falha"}
          >
            <IconWrapper Icon={IoMdAlert} />
            <span>Algo deu errado</span>
          </Alert>

          <InputWraper error={errors.nome && touched.nome}>
            <Label htmlFor="nome">Nome</Label>
            <Input
              type="text"
              name="nome"
              id="nome"
              disabled={isSubmitting}
              placeholder="Nome"
            />
            <ErrorMsg name="nome" component="div" />
          </InputWraper>
          <InputWraper error={errors.email && touched.email}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              disabled={isSubmitting}
              placeholder="Email"
            />
            <ErrorMsg name="email" component="div" />
          </InputWraper>

          <InputWraper error={errors.assunto && touched.assunto}>
            <Label htmlFor="assunto">Assunto</Label>
            <Input
              type="text"
              name="assunto"
              id="assunto"
              disabled={isSubmitting}
              placeholder="Assunto"
            />
            <ErrorMsg name="assunto" component="div" />
          </InputWraper>
          <InputWraper error={errors.mensagem && touched.mensagem}>
            <Label htmlFor="mensagem">Mensagem</Label>
            <Input
              component="textarea"
              type="textarea"
              name="mensagem"
              id="mensagem"
              disabled={isSubmitting}
              placeholder="Mensagem"
              rows="6"
            />
            <ErrorMsg name="mensagem" component="div" />
          </InputWraper>

          <Bottom>
            <Button
              outline
              type="reset"
              disabled={isSubmitting}
              submitting={isSubmitting}
            >
              {isSubmitting && <IconWrapper Icon={CgBlock} />} Limpar
            </Button>
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                !(
                  errors &&
                  Object.keys(errors).length === 0 &&
                  errors.constructor === Object
                )
              }
              submitting={isSubmitting}
            >
              {isSubmitting ? (
                <IconWrapper Icon={CgSpinnerTwo} spinner={1} />
              ) : (
                "Enviar"
              )}
            </Button>
          </Bottom>
        </Container>
      )}
    </Formik>
  );
};

export default Formulario;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
