const express = require('express');

const resourcesDb = require('../data/helpers/resources');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resources = await resourcesDb.get();
    res.status(200).json(resources);
  } catch(err) {

  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await resourcesDb.getById(id);
    res.status(200).json(resource);
  } catch(err) {

  }
});

router.post('/', async (req, res) => {
  try {
    const newResource = await resourcesDb.insert(req.body);
    res.status(201).json(newResource);
  } catch(err) {

  }
});

module.exports = router;