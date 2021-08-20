"use strict";
module.exports = {
    metadata: {
        name: "datos_personales_handler",
        eventHandlerType: "ResolveEntities",
    },
    handlers: {
        entity: {},
        items: {
            fecha_nacimiento: {
                /*shouldPrompt: async (event, context) => {
                    let tipo_vivienda = context._entity.tipo_vivienda;
                },*/
                publishPromptMessage: async (event, context) => {
                    if (event.promptCount > 1) {
                        context.addMessage(
                          `Debes de ser mayor de edad para solicitar la beca. Ingresa de nuevo tu fecha de nacimiento`
                        );
                      } else {
                        context.addMessage(`¿Cuál es tu fecha de nacimiento`);
                      }
                },
                validate: async (event, context) => {
                    let fechaNacimiento = context._entity.fecha_nacimiento;
                    //let estadoOperacion = context._response.context.variables.estado_operacion.value
                    context.logger().info('---------------------------------->')
                    let yaEsAdulto = esAdulto(fechaNacimiento.date)
                    context.logger().info('fechaNacimiento', yaEsAdulto)
                    return yaEsAdulto
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