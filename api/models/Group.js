/**
 * Group.js
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
    name: 'string',
    leader: {
      model: 'member'
    },
    coleader: {
      model: 'member'
    },
    addressLeader: 'boolean',
    dayWeek: 'integer',
    hour: 'string',
    members: {
      collection: 'member',
      via: 'group'
    }
  }
};
