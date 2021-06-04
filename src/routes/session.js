const express = require("express");
const routes = express.Router();
const { celebrate, Joi, Segments } = require("celebrate");

const SessionController = require("../controllers/SessionController");

routes.post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  SessionController.create
);

module.exports = routes;
//commit
