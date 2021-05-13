import { SiteClient } from "datocms-client";
const datoAPI = process.env.DATO_API_TOKEN;

exports.handler = async function (event, context) {
  const { body } = event;
  const formulario = JSON.parse(body);
  if (!datoAPI) {
    return {
      statusCode: 400,
      error: "Não foi possivel encontrar DATO CMS API.",
    };
  }
  if (!body.nome || !body.email || !body.assunto || !body.mensagem) {
    return {
      statusCode: 400,
      error:
        "Falha ao enviar o formulário. Um ou mais campos não foram fornecidos.",
    };
  }
  const client = new SiteClient(datoAPI);
  client.items
    .create({
      itemType: "782503",
      nome: body.nome,
      email: body.email,
      assunto: body.assunto,
      mensagem: body.mensagem,
    })
    .then(
      (resposta) => {
        return { statusCode: 200, message: resposta };
      },
      (error) => {
        return { statusCode: 400, error: error };
      }
    );
};
