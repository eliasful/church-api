/**
 * Church.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: true
    },
    number: {
      type: 'string',
      required: true
    },
    city: {
      type: 'string',
      required: true
    },
    responsible: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      required: true
    },
    cpf: {
      type: 'string',
      required: true
    }
  },

  afterCreate: function(values, next) {
    return User.create({
      church: values.id,
      name: values.responsible,
      email: values.email,
      password: values.cpf
    }).exec(function(err, user) {
      if (err) {
        next(err);
      }

      next();
    });
  }
};
