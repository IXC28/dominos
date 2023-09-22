const statsRouter = require('express').Router();
const User = require('../models/user');

statsRouter.get('/', async (request, response) => {

     const logiado = request.login;         
    
    if (!logiado) {
        return response.status(401).json({error: 'Debes iniciar sesion'});
    }

  const user = request.user;
    const wins = user.partidasGanadas;
    const loses = user.partidasPerdidas;
    const zapatos = user.Zapatos;

    console.log(wins, loses, zapatos);

  
  return response.status(200).json({logiado, wins, loses, zapatos});

});


statsRouter.patch('/', async (request, response) => {
    try {
        const user = request.user;
        const { partidasGanadas, partidasPerdidas, zapatos } = request.body;

        // Obtén el usuario actual de la base de datos
        const usuarioActual = await User.findById(user.id);

        // Suma los nuevos valores a los valores actuales
        const nuevasPartidasGanadas = usuarioActual.partidasGanadas + Number(partidasGanadas);
        const nuevasPartidasPerdidas = usuarioActual.partidasPerdidas + Number(partidasPerdidas);
        const nuevosZapatos = usuarioActual.Zapatos + Number(zapatos);

        // Actualiza los valores en la base de datos
        await User.findByIdAndUpdate(user.id, {
            partidasGanadas: nuevasPartidasGanadas,
            partidasPerdidas: nuevasPartidasPerdidas,
            Zapatos: nuevosZapatos
        });

        return response.status(200).json({});
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Error en el servidor' });
    }
});
module.exports = statsRouter;