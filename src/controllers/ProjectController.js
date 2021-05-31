const listProjects = require("../services/projects/ListProjectsService");
const createProject = require("../services/projects/CreateProjectsService");
const updateProject = require("../services/projects/UpdateProject");
const deleteProjectService = require("../services/projects/DeleteProjectService");

module.exports = {
  //List projects
  async index(req, res, next) {
    try {
      const { user_id, category, page = 1 } = req.query;

      const projects = await listProjects.index(user_id, category, page);
      const { user_id, category, page = 1, id } = req.query;

      const projects = await listProjects.index(user_id, category, page, id);

      res.header("X-Total-Count", projects.count["count"]);
      return res.json(projects.results);
    } catch (error) {
      next(error);
    }
  },

  //Create Projects
  async create(req, res, next) {
    try {
      const {
        title,
        description,
        category,
        image,
        valuation,
        address,
        goal,
        balance,
        date_limit,
        account,
        user_id,
      } = req.body;

      await createProject.create({
        title,
        description,
        category,
        image,
        valuation,
        address,
        goal,
        balance,
        date_limit,
        account,
        user_id,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  //Update projects
  async update(req, res, next) {
    try {
      const {
        title,
        description,
        category,
        image,
        valuation,
        address,
        goal,
        balance,
        date_limit,
        account,
      } = req.body;

      const { id } = req.params;

      await updateProject.update({
        title,
        description,
        category,
        image,
        valuation,
        address,
        goal,
        balance,
        date_limit,
        account,
        id,
      });

      return res.send();
    } catch (error) {
      next(error);
    }
  },

  //Delete Projects
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await deleteProjectService.delete({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
