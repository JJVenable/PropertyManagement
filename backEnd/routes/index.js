const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')


router.get('/', (req, res) => res.send('This is root/nothing! You did it!'))

// tasks
router.get('/tasks', controllers.getAllTasks);

router.get('/:id', controllers.getTaskById);

router.put('/tasks/:id', controllers.updateTask);

router.put('/tasks/:id', controllers.updateTask)

router.delete('/tasks/:id', controllers.deleteTask)

// properties
router.get('/properties', controllers.getAllProperties);

router.get('/:id', controllers.getPropertyById);

router.put('/tasks/:id', controllers.updateProperty);

router.put('/tasks/:id', controllers.updateProperty)

router.delete('/tasks/:id', controllers.deleteProperty)



module.exports = router;