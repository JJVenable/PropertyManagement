const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')


router.get('/', (req, res) => res.send('This is root/nothing! You did it!'))

// tasks
router.get('/tasks', controllers.getAllTasks);

router.get('/tasks/:id', controllers.getTaskById);

router.put('/tasks/:id', controllers.updateTask);

router.delete('/tasks/:id', controllers.deleteTask)

// properties
router.get('/properties', controllers.getAllProperties);

router.get('/properties/:id', controllers.getPropertyById);

router.put('/properties/:id', controllers.updateProperty);

router.delete('/properties/:id', controllers.deleteProperty)



module.exports = router;