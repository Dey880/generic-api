const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const itemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now() },
});

const Item = model('Item', itemSchema);
module.exports = Item;