const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Types.ObjectId, required: true },
  customerId: { type: mongoose.Types.ObjectId, required: true },
  items: [{
    menuItemId: mongoose.Types.ObjectId,
    name: String,
    quantity: Number,
    price: Number
  }],
  total: { type: Number, required: true },
  status: {
    type: String,
    enum: ['PENDING', 'CONFIRMED', 'PREPARING', 'READY', 'PICKED_UP', 'DELIVERED', 'CANCELLED'],
    default: 'PENDING'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema); 