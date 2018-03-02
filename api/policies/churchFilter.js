
module.exports = function(req, res, next) {
	if (!req.user) return res.forbidden('Esta requisição requer um usuário autenticado');

	/*--- Início do mecanismo para que um usuário só veja/crie/edite conteúdo proprio ou da sua empresa ---*/
	req.query = _.extend(req.query, {
		church: req.user.church
	});

	if(req.query.where) {
		var where = JSON.parse(req.query.where)
		where.church = req.user.church;
		req.query.where = where;
	}

	if ((req.method === 'POST' || req.method === 'PUT') && req.options.model) {
		var camelCaseKey = Utils.camelCaseKey(req.body, req.options.model);
		req.body[camelCaseKey] = _.extend(req.body[camelCaseKey], {
			church: req.user.church
		});
	}
	/*--- Fim do mecanismo ---*/
	next();
};
