var jwt = require('jwt-simple');
var User = require('../database/models/user.js');
var config = require('../../config.js');

var tokenForUser = function(user) {
  // each token we take email and add a string
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.email, iat: timestamp}, config.secret);
  };


module.exports = {

  authenticate: function (req, res) {

  },

  signin: function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({
      where: {
        email: email
      }
    }).then(function (found) {
      if (found) {
        found.comparePassword(password, function (match) {
          if (match) {
            // signin user
            // redirect to home
          } else {
            // wrong password!
            // display error message
          }
        });
      } else {
        res.redirect('/signup');
      }
    });
  },

  signup: function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    User.create({
      // where: {
        email: email,
        password: password
      // }
    }).then(function (user) {

      //signin user?
      // sending back jwt to user
      res.json({token: tokenForUser(user) });
      // redirect to home?
    }).catch(function (err) {
      console.log(err);
    });
  }

};