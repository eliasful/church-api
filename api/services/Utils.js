
module.exports = {
	filterId: function (object) {
		return object.id;
	},

	upperCaseKeys: function (obj) {
		var key, keys = Object.keys(obj);
		var n = keys.length;
		var newobj={}
		while (n--) {
		  key = keys[n];
		  newobj[key.toUpperCase()] = obj[key];
		}
		return newobj;
	},

	lowerCaseKeys: function (obj) {
		var key, keys = Object.keys(obj);
		var n = keys.length;
		var newobj={}
		while (n--) {
		  key = keys[n];
		  newobj[key.toLowerCase()] = obj[key];
		}
		return newobj;
	},

	camelCaseKey: function (obj, lowerCaseKey) {
		var keys = Object.keys(obj);
		var n = keys.length;

		while (n--) {
		  if(keys[n].toLowerCase() === lowerCaseKey) return keys[n];
		}
		return null;
	},
	filterTickets(object) {
		return object.ticket;
	},
	processPagarmeErrors: function(response) {
    var PagarMeError = function(errors) {
      var messages = [];
      var errorObject = new Error();

      errors.forEach(function(error) {
        messages.push(error.message);
      });

      errorObject.name = 'PagarmeError';
      errorObject.message = messages.join(" | ");
      return errorObject;
    };
    return new PagarMeError(response.errors);
  },

	removePhoneMask(text) {
		if (!text) return;
		return text.replace(/[^\w\s]/gi, '');
	}
};
