const express = require('express');

const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const resourceRoutes = require('./routes/resourceRoutes');

const server = express();
server.use(express.json());

server.use('/api/projects', projectRoutes);
server.use('/api/tasks', taskRoutes);
server.use('/api/resources', resourceRoutes);

server.listen(5000, () => {
  console.log('listening on port 5000');
});