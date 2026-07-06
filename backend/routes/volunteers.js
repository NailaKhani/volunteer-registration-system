const express = require('express');
const router = express.Router();
const { getVolunteers, deleteVolunteer, exportVolunteers } = require('../controllers/volunteerController');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

router.get('/', protect, admin, getVolunteers);
router.get('/export', protect, admin, exportVolunteers);
router.delete('/:id', protect, admin, deleteVolunteer);

module.exports = router;
