import { parse } from "querystring";
import { SiteClient } from "datocms-client";

const datoApi = process.env.DATO_API_TOKEN;

exports.handler = (event, context, callback) => {
  let body = {};
  console.log(event);
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    body = parse(event.body);
  }
  console.log(body);

  if (!datoApi) {
    return callback(null, {
      statusCode: 400,
      data: JSON.stringify({
        error: "Dato CMS API não foi encontrado",
      }),
    });
  }

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
        return callback(null, { statusCode: 200, data: resposta });
      },
      (error) => {
        return callback(null, { statusCode: 400, error: error });
      }
    );
};
