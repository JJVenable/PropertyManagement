const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')


router.get('/', (req, res) => res.send('This is root/nothing! You did it!'))


router.get('/tasks', controllers.getAllTasks);


//below crashing server

router.get('/:id', controllers.getTaskById);

router.put('/tasks/:id', controllers.updateTask);

router.put('/tasks/:id', controllers.updateTask)

router.delete('/tasks/:id', controllers.deleteTask)




module.exports = router;