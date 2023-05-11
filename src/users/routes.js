const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getUsers)
router.post('/',controller.addUsers)
router.get('/:id', controller.getUsersById)
router.put('/:id', controller.updateUsers)
router.delete('/:id', controller.removeUsers)

module.exports = router;