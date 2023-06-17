const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/users.js');

router.get('/', (req, res) => {
res.send('Home page');
});

router.post('/api/v1/register', (req, res) => {
    const { name, password, email } = req.body;
    const newUser = new user({
      name: name,
      password: password,
      email: email
    });

    user.findOne({ email: newUser.email })
    .then((existingUser) => {
      if (existingUser) {
        return res.json({ status: 'error', message: 'Email error' });
    }

    newUser.save()
      .then((savedUser) => {
        res.json({ status: 'success', savedUser });
      })
      .catch((err) => {
        res.json({ status: 'error', error: `${err}` });
      });
});
});

router.post('/api/v1/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.json({ status: 'error', message: 'Invalid email password' });
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return res.json({ status: 'error', message: 'Password error' });
          }
  
          if (!isMatch) {
            return res.json({ status: 'error', message: 'Mail or Pasword error' });
          }
          return res.json({ status: 'success', message: 'success', user });
        });
      })
      .catch((err) => {
        res.json({ status: 'error', message: `error`, error: `${err}`  });
      });
  });
  
module.exports = router;