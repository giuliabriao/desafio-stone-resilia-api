const express = require("express");
const routes = express.Router();
const UserController = require("../controllers/UserController");
const auth = require("../middlewares/isAuthenticated");
const { celebrate, Joi, Segments } = require("celebrate");
const multer = require("multer");
const uploadConfig = require("../config/upload");
const uploadAvatar = require("../services/firebase/firebase");

const upload = multer({ uploadConfig });

routes
  .get("/", UserController.index)

  .get("/me", auth.isAuthenticated, UserController.me)

  .post(
    "/",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        username: Joi.string().required(),
        avatar: Joi.string().default(null),
        email: Joi.string().required(),
        birth: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }),
    UserController.create
  )

  .put(
    "/",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        firstName: Joi.string(),
        lastName: Joi.string(),
        username: Joi.string(),
        avatar: Joi.string(),
        email: Joi.string(),
        birth: Joi.string(),
        password: Joi.string(),
      }),
    }),
    auth.isAuthenticated,
    UserController.update
  )

  .patch(
    "/avatar",
    auth.isAuthenticated,
    upload.single("avatar"),
    uploadAvatar,
    UserController.updateAvatar
  )

  .delete("/", auth.isAuthenticated, UserController.delete);

module.exports = routes;
