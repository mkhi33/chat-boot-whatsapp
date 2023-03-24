const { v4: uuidv4 } = require('uuid');
const dialogflow = require("./dialogflow");
const venom = require('venom-bot');
require('dotenv').config()


const sessionIds = new Map();


venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    console.log(message);
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
  console.log(message)
  return new Promise((resolve, reject) => {
    client
      .sendText(message.from, response.text.text[0])
      .then((result) => {
        console.log("Result: ", result); //return object success
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