const express = require('express');
const route = express.Router();
const Contact = require('../model/model');
const { body, validationResult } = require('express-validator');


route.post('/contact', [
    body('name', 'Enter your name').isLength({min:3}),
    body('email', 'Enter your email').isEmail(),
    body('msg', 'Enter your Massage').isLength({min:3})
],async (req, res) => {
    try {
        let success = false
        let result = validationResult(req);
        if (!result.isEmpty()) {
           return res.status(400).json({ success,result: result.array() })
        }
        let { name, email, msg } = req.body;
        
         contactData = await Contact.create({
            name,
            email,
            msg
        });

        const saveContact = await  contactData.save()
        res.json({ success:true,saveContact });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = route;