/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

// We don't want to store password with out encryption
var bcrypt = require('bcrypt');

module.exports = {

  schema: true,

  attributes: {
    church: {
      model: 'church',
      required: true
    },
    email: {
      type: 'email',
      required: 'true',
      unique: true // Yes unique one
    },
    password: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    number: {
      type: 'string'
    },
    neighborhood: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    zipcode: {
      type: 'string'
    },

    // We don't wan't to send back encrypted password either
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  // Here we encrypt password before creating a User
  beforeCreate: function(values, next) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(values.password, salt, function(err, hash) {
        if (err) return next(err);
        values.password = hash;
        next();
      })
    })
  },

  comparePassword: function(password, user, cb) {
    bcrypt.compare(password, user.password, function(err, match) {

      if (err) cb(err);
      if (match) {
        cb(null, true);
      } else {
        cb(err);
      }
    })
  }
};
