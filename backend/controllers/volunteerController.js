const User = require('../models/User');

// @desc    Get all volunteers
// @route   GET /api/volunteers
// @access  Private/Admin
const getVolunteers = async (req, res) => {
  try {
    const volunteers = await User.find({ role: 'volunteer' }).select('-password');
    res.json(volunteers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete volunteer
// @route   DELETE /api/volunteers/:id
// @access  Private/Admin
const deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await User.findById(req.params.id);

    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    if (volunteer.role !== 'volunteer') {
       return res.status(400).json({ message: 'Can only delete volunteers' });
    }

    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Volunteer removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Export volunteer data as CSV
// @route   GET /api/volunteers/export
// @access  Private/Admin
const exportVolunteers = async (req, res) => {
  try {
    const volunteers = await User.find({ role: 'volunteer' }).select('-password -__v').lean();
    
    if (volunteers.length === 0) {
      return res.status(404).json({ message: 'No volunteers found to export' });
    }

    const fields = ['_id', 'name', 'email', 'phone', 'city', 'skills', 'availability', 'createdAt'];
    const replacer = (key, value) => value === null ? '' : value; 
    let csv = volunteers.map(row => 
        fields.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(',')
    );
    csv.unshift(fields.join(','));
    csv = csv.join('\r\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="volunteers.csv"');
    res.status(200).send(csv);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getVolunteers,
  deleteVolunteer,
  exportVolunteers
};
