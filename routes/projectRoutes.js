const express = require('express');

const projectsDb = require('../data/helpers/projects');
const tasksDb = require('../data/helpers/tasks');
const resourcesDb = require('../data/helpers/resources');

const convertBool = require('../util/convertBool');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await projectsDb.get().map(convertBool);
    res.status(200).json(projects);
  } catch(err) {

  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = convertBool(await projectsDb.getById(id));
    res.status(200).json(project);
  } catch(err) {

  }
});

router.get('/:id/tasks', async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await tasksDb.getByProject(id).map(convertBool);
    res.status(200).json(tasks);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id/resources', async (req, res) => {

});



router.post('/', async (req, res) => {
  try {
    const newProject = await projectsDb.insert(req.body);
    res.status(201).json(newProject);
  } catch(err) {

  }
});

router.post('/:id/tasks', async (req, res) => {
  try {
    const { id } = req.params;
    const taskData = {
      ...req.body,
      project_id: id
    };
    const newTask = convertBool(await tasksDb.insert(taskData));
    res.status(201).json(newTask);
  } catch(err) {

  }
});

router.post('/:id/resources', async (req, res) => {

});

module.exports = router;