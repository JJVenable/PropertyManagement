const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('This is root/nothing! You did it!'))

module.exports = router;