/*S"use strict";
module.exports = {
    metadata: {
        name: "HANDLER_NAME",
        eventHandlerType: "ResolveEntities",
    },
    handlers: {
        entity: {},
        items: {
            ITEM: {
                shouldPrompt: async (event, context) => {
                    let tipo_vivienda = context._entity.tipo_vivienda;
                    return true
                },
                publishPromptMessage: async (event, context) => {return true},
                validate: async (event, context) => {return true},
            },
        }
    }
};*/

function getDate(unix_timestamp){
    const date = new Date(unix_timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
}