const Task = require('../models/task')
const Property = require('../models/property')

const createTask = async (req,res) => {
  try {
    const task = await new Task(req.body)
    await task.save()
    return res.status(201).json({
      task,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message})
  }
}


const getAllTasks = async (req, res) => {
  try {
      const task = await Task.find()
      return res.status(200).json({ task })
  } catch (error) {
      return res.status(500).send("problem with route for getAllTasks");
  }
}

const getTaskById = async (req, res) => {
  try {
      const { id } = req.params;
      const task = await Task.findById(id)
      if (task) {
          return res.status(200).json({ task });
      }
      return res.status(404).send('Task with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const updateTask = async (req, res) => {
  try {
      const { id } = req.params;
      await Task.findByIdAndUpdate(id, req.body, { new: true }, (err, task) => {
          if (err) {
              res.status(500).send(err);
          }
          if (!task) {
              res.status(500).send('Task not found!');
          }
          return res.status(200).json(task);
      })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


const deleteTask = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Task.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Task deleted");
      }
      throw new Error("Task not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

{///////////////////////Property controllers below//////////////////////////////////////// 
}

const createProperty = async (req,res) => {
  try {
    const property = await new Property(req.body)
    await property.save()
    return res.status(201).json({
      property,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message})
  }
}


const getAllProperties = async (req, res) => {
  try {
      const property = await Property.find()
      return res.status(200).send( property )
  } catch (error) {
      return res.status(500).send("problem with route for getAllProperties");
  }
}

const getPropertyById = async (req, res) => {
  try {
      const { id } = req.params;
      const property = await Property.findById(id)
      if (property) {
          return res.status(200).json({ property });
      }
      return res.status(404).send('Property with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const updateProperty = async (req, res) => {
  try {
      const { id } = req.params;
      await Property.findByIdAndUpdate(id, req.body, { new: true }, (err, property) => {
          if (err) {
              res.status(500).send(err);
          }
          if (!property) {
              res.status(500).send('Property not found!');
          }
          return res.status(200).json(property);
      })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


const deleteProperty = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Property.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Property deleted");
      }
      throw new Error("Property not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
}