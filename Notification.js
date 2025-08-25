const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
