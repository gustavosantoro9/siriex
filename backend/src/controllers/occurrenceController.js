const { Occurrence } = require('../models');

module.exports = {

    async store(req, res) {
        const occurrence = await Occurrence.create(req.body);
        res.send(occurrence);
    },

    async index(req, res) {
        let occurrences = await Occurrence.findAll({
            attributes: ['id', 'nome', 'local', 'datahora', 'tipo'],
            where: {
                aprovado: true
            }
        });
        res.send(occurrences);
    },

    async indexNotApproved(req, res) {
        let occurrences = await Occurrence.findAll({
            attributes: ['id', 'nome', 'local', 'datahora', 'tipo'],
            where: {
                aprovado: false
            }
        });
        res.send(occurrences);
    },

    async indexName(req, res) {
        let occurrence = await Occurrence.findAll({
            attributes: ['id', 'nome', 'local', 'datahora', 'tipo'],
            where: {
                nome: req.params.nome
            }
        });
        res.send(occurrence);
    },

    async indexId(req, res) {
        let occurrence = await Occurrence.findAll({
            attributes: ['id', 'nome', 'local', 'datahora', 'tipo', 'solicitante', 'tipoexplosivo',
                'tipoobjeto', 'caracteristicasfisicas', 'motivacao', 'iis',
                'metodologia', 'policial', 'administrador'],
            where: {
                id: req.params.id
            }
        });
        res.send(occurrence);
    },

    async aprove(req, res) {
        let occurrence = await Occurrence.update({
            aprovado: true,
            administrador: req.params.admin
        }, {
                where: {
                    id: req.params.id
                }
            });
        res.send(occurrence);
    }


};