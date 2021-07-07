const express = require('express');

const tasksDb = require('../data/helpers/tasks');
const convertBool = require('../util/convertBool');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await tasksDb.get().map(convertBool);
    res.status(200).json(tasks);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = convertBool(await tasksDb.getById(id));
    res.status(200).json(task);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;