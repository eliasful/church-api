/**
 * Member.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    church: {
      model: 'church',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    age: 'integer',
    gender: 'string',
    celPhone: 'string',
    phone: 'string',
    email: 'string',
    cep: 'string',
    address: 'string',
    number: 'string',
    complement: 'string',
    neighborhood: 'string',
    city: 'string',
    state: 'string',
    birthday: 'date',
    civilStatus: 'string',
    schooling: 'string',
    rg: 'string',
    cpf: 'string',
    natural: 'string',
    charge: 'string',
    ordination: 'date',
    baptism: 'date',
    hisWife: {
      model: 'member'
    },
    married: 'date',
    father: {
      model: 'member'
    },
    mother: {
      model: 'member'
    },
    children: 'string'
  }
};
