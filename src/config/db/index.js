require('dotenv').config()

const mongoose = require('mongoose');
const DB_CONNECTION = process.env.DB_CONNECTION;

async function connect() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(DB_CONNECTION);
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect }