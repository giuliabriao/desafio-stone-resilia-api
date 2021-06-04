const express = require("express");
const routes = express.Router();
const { celebrate, Joi, Segments } = require("celebrate");

const TransactionController = require("../controllers/TransactionController");
const auth = require("../middlewares/isAuthenticated");

routes.use(auth.isAuthenticated);
routes.get("/", TransactionController.index).post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      value: Joi.number().required(),
      date: Joi.string().required(),
      sender: Joi.number().required(),
      receptor: Joi.number().required(),
    }),
  }),
  TransactionController.create
);

module.exports = routes;
