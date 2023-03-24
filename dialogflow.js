const dialogflow = require("dialogflow");
require('dotenv').config()


const sessionClient = new dialogflow.SessionsClient({
    keyFilename: '/home/mkhi/Developer/TD/landing/tdigital-381414-45a62eb327e3.json'
});

async function sendToDialogFlow(message, session, params) {

    try {
        const sessionPath = sessionClient.sessionPath(
            process.env.DIALOGFLOW_PROJECT_ID,
            session
        );

        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: message,
                    languageCode: process.env.DF_LANGUAGE_CODE,
                },
            },
            queryParams: {
                payload: {
                    data: params,
                },
            },
        };
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        console.log("INTENT EMPAREJADO: ", result.intent.displayName);
        let defaultResponses = [];
        if (result.action !== "input.unknown") {
            result.fulfillmentMessages.forEach((element) => {
                defaultResponses.push(element);
            });
        }

        if (defaultResponses.length === 0) {
            result.fulfillmentMessages.forEach((element) => {
                if (element.platform === "PLATFORM_UNSPECIFIED") {
                    defaultResponses.push(element);
                }
            });
        }

        result.fulfillmentMessages = defaultResponses;
        console.log(JSON.stringify(result, null, " "));
        return result;

    } catch (error) {
        console.log("error");
        console.log(error);
    }

}
module.exports = {
    sendToDialogFlow
  };