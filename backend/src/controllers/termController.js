const { Term } = require('../models');

module.exports = {

    async store(req, res){
        const term = await Term.create(req.body);
        res.send(term);
    },

    async index(req, res){
        let terms = await Term.findAll({
            attributes: ['id','term', 'description'],
            where: {
                approved: true
            }
        });
        res.send(terms);
    },

    async indexName(req, res){
        let term = await Term.findAll({
            attributes: ['id','term', 'description', 'origin'],
            where: {
                term: req.params.term,
                approved: true
            }
        });                  
        res.send(term);
    },

    async indexLetter(req, res){
        let term = await Term.findAll({
            attributes: ['id','term', 'description', 'origin'],
            where: {
                letter: req.params.letter,
                approved: true
            }
        });         
        res.send(term);
    },

    async indexNotApproved(req, res) {
        let terms = await Term.findAll({
            attributes: ['id','term', 'description', 'origin', 'user'],
            where: {
                approved: false
            }
        });
        res.send(terms);
    },

    async aprove(req, res) {
        let term = await Term.update({
            approved: true,
            admin: req.params.admin
        }, {
                where: {
                    id: req.params.id
                }
            });
        res.send(term);
    }
    
};