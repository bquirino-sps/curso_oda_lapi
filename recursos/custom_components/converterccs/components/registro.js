'use strict';
module.exports = {
  metadata: () => ({
    name: 'registro',
    properties: {
      datos_personales: { required: true, type: 'string' },
      estado_operacion: { required: true, type: 'string'}
    },
    supportedActions: ['success', 'failure']
  }),
  invoke: (context, done) => {
    // Obtenemos las variable que vamos a ocupar
    let { datos_personales , estado_operacion } = context.properties();
    datos_personales =  JSON.parse(datos_personales)
    //Ejecutamos nuestra funcionalidad
    console.log("datos_personales",datos_personales)
    console.log("typeof",typeof(datos_personales))

    context.setVariable(estado_operacion,'Se registraron los datos correctamente');
    //
    context.transition('success');
    context.keepTurn(true);
    done();  
  }
};
