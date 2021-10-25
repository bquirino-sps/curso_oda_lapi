'use strict';
 
module.exports = {
  metadata: () => ({
    name: 'registro_datos',
    properties: {
      datos_personales: { required: true, type: 'string' },
      estado_operacion: { required: true, type: 'string'}
    },
    supportedActions: ['success','failure']
  }),


  invoke: (context, done) => {
    // Retrieve the value of the 'human' component property.
    const { datos_personales,estado_operacion } = context.properties();
   
    //datos_personales = JSON.parse(datos_personales);

    console.log('-------------------------------------Datos_personales',datos_personales);
    context.logger().info('-----------------> typeof', typeof(datos_personales));

    context.variable('estado_operacion', 'Exito')
    //context.variable(estado_operacion,'exito') 

    context.reply('Hemos registrado tus datos exitosamente');
    
    context.keepTurn(true);
    context.transition('success');       
    done();  
  }
};
