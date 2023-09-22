const loginRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

loginRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const userExist = await User.findOne({ name });

  if (!userExist) {
    return response.status(400).json({ error : 'El nombre no existe' });
  }


  const userForToken = {
    id: userExist.id,
  };

  const accessToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, {

    expiresIn: '180d',

  });

  response.cookie('accessToken', accessToken, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1),
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  });

  return response.sendStatus(200);


});


module.exports = loginRouter;