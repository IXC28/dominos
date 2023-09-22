const listRouter = require('express').Router();
const User = require('../models/user');

listRouter.get('/', async (request, response) => {

        try {
          const users = await User.find();
            console.log(users);
          return response.status(200).json(users);

        } catch (error) {

          return response.status(500).json({ error: 'Error al buscar usuarios' });

        }
});



module.exports = listRouter;