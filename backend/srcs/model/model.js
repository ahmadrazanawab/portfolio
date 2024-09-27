const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    msg: {
        type: String,
        require: true,
    }
},
    {
        timestamps: true
    }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

