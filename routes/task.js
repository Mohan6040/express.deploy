const express = require('express')
const router = express.Router(); // which is use to perform the routing. 
const Task = require('../models/task')
// Create a task
router.post('/task', async (req, res) => {
    try {
        const task = new Task(req.body)
        await task.save()
        res.status(201).send(task)
    } catch(error) {
        res.status(400).send(error);
    }
    console.log("Data Inserted Successfully")
})
// Read all task
router.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.send(tasks);
    } catch (error) {
      res.status(500).send(error);
    }
    console.log("Fetched Data Successfully")
  });
  // Update a task by ID
router.patch('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    } catch (error) {
      res.status(400).send(error);
    }
    console.log("Data Updated!")
  });
  // Delete a task by ID
router.delete('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    } catch (error) {
      res.status(500).send(error);
    }
    console.log("Data Deleted!")
  });
  
  module.exports = router;