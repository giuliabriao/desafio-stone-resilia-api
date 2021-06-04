const express = require("express");
const routes = express.Router();
const { celebrate, Joi, Segments } = require("celebrate");

const ProjectController = require("../controllers/ProjectController");
const auth = require("../middlewares/isAuthenticated");

routes
  .get("/", ProjectController.index)

  .post(
    "/",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        category: Joi.string().required(),
        goal: Joi.number().required(),
        date_limit: Joi.string().required(),
        image: Joi.string().default(""),
        valuation: Joi.number().default(0),
        address: Joi.string().default(""),
        balance: Joi.number().default(0),
        account: Joi.string().default(""),
        user_id: Joi.number().required(),
      }),
    }),
    auth.isAuthenticated,
    ProjectController.create
  )

  .put(
    "/:id",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string(),
        description: Joi.string(),
        category: Joi.string(),
        goal: Joi.number(),
        date_limit: Joi.string(),
        image: Joi.string(),
        valuation: Joi.number(),
        address: Joi.string(),
        balance: Joi.number(),
        account: Joi.string(),
        user_id: Joi.number(),
      }),
      [Segments.PARAMS]: {
        id: Joi.number().required(),
      },
    }),
    auth.isAuthenticated,
    ProjectController.update
  )

  .delete(
    "/:id",
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.number().required(),
      },
    }),
    auth.isAuthenticated,
    ProjectController.delete
  );

module.exports = routes;
