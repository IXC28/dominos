const usersRouter = require('express').Router();
const User = require('../models/user') ;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PAGE_URL } = require('../config');


usersRouter.post('/', async (request, response) => {

  const { name } = request.body;
    console.log(name);

  if (!name) {
    return response.status(400).json({ error: 'Todos los espacios son requeridos' });
  }

  const userExist = await User.findOne({ name });

  if (userExist) {
    return response.status(400).json({ error: 'El nombre ya esta en uso' });
  }


  const newUser = new User({
    name,
  });

 await newUser.save();


  return response.status(201).json('Usuario creado. Porfavor inicie sesion');

});


module.exports = usersRouter;