const express = require('express');
const router = express.Router();

const { upload } = require('../../app/utils');
const { isAuth, isGroupAdmin, isGroupMember } = require('../../app/middlewares');
const { groupsControllers } = require('../../app/controllers');

router.post('/', isAuth, groupsControllers.create);

// should add isGroupAdmin middleware
router.put('/:_id', isAuth, isGroupAdmin, groupsControllers.update);

router.get('/:_id', isAuth, isGroupMember, groupsControllers.get);

module.exports = router;
