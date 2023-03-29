const { v4: uuidv4 } = require('uuid');
const dialogflow = require("./dialogflow");
const venom = require('venom-bot');
require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 8000

const sessionIds = new Map();

app.get('/start', (req, res) => {
  venom
    .create()
    .then((client) => {
      start(client);
      res.send('¡Boot iniciado!')
    })
    .catch((erro) => {
      console.log(erro);
    });

})

app.listen(port, () => {
  console.log("El servidor está inicializado en el puerto " + port);
  venom
    .create()
    .then((client) => {
      start(client);
    })
    .catch((erro) => {
      console.log(erro);
    });
})



function start(client) {
  client.onMessage(async (message) => {
    setSessionAndUser(message.from);
    let session = sessionIds.get(message.from);
    try {
      let payload = await dialogflow.sendToDialogFlow(message.body, session);
      let responses = payload.fulfillmentMessages;
      for (const response of responses) {
        await sendMessageToWhatsapp(client, message, response);
      }
    } catch (error) {
      console.log(error);
    }
  });
}
function sendMessageToWhatsapp(client, message, response) {
  return new Promise((resolve, reject) => {
    client
      .sendText(message.from, response.text.text[0])
      .then((result) => {
        resolve(result);
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro);
        reject(erro);
      });
  });
}

async function setSessionAndUser(senderId) {
  try {
    if (!sessionIds.has(senderId)) {
      sessionIds.set(senderId, uuidv4());
    }
  } catch (error) {
    throw error;
  }
}