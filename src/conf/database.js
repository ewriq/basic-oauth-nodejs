const mongoose = require("mongoose");
const { url } = require("./config.js");

var db = () => {
   mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Sucsessed databese connection');
    })
    .catch((err) => {
      console.error('Error', err);
    });
};

module.exports = db