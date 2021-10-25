
"use strict";

module.exports = {
    metadata: {
        name: "manejo_datos_personales",
        eventHandlerType: "ResolveEntities",
    },
    handlers: {
        entity: {},
        items: {
            fecha_nacimiento: {
                /* shouldPrompt: async (event, context) => {
                    let tipo_vivienda = context._entity.tipo_vivienda;
                    return true
                }, */
                publishPromptMessage: async (event, context) => {
                    let payload = {
                        type: "text",
                        text: "Ingresa de nuevo tu fecha de nacimiento",
                    }

                    if (event.promptCount > 1) {
                        context.addMessage(payload);
                    } else {
                        context.addMessage(`¿Cuál es tu fecha de nacimiento?`);
                    }
                },
                
                validate: async (event, context) => {
                    let fechaNacimiento = context._entity.fecha_nacimiento;
                    //let estadoOperacion = context._response.context.variables.estado_operacion.value
                    context.logger().info('---------------------------------->');

                    let yaEsAdulto = esAdulto(fechaNacimiento.date)

                    context.logger().info('fechaNacimiento', yaEsAdulto)

                    if(yaEsAdulto == true){
                        return true;
                    }else{
                        context.addMessage('Parece ser que no eres mayor de edad, por favor ingresa de nuevo tu fecha de nacimiento',true);
                        return false;
                    }
                    //return yaEsAdulto
                    //context.logger().info('estadoOperacion',estadoOperacion)
                },
            },
        }
    }
};


function esAdulto(timestamp){
    const date = new Date(timestamp);
    const now = new Date();
    const edad = now.getFullYear() - date.getFullYear()
    return edad >= 18 ? true: false
}