/*'use strict';
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
    //
    context.transition('success');
    context.keepTurn(true);
    done();  
  }
};*/
