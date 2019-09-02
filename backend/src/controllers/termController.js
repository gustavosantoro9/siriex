const { Term } = require('../models');

module.exports = {

    async store(req, res){
        const term = await Term.create(req.body);
        res.send(term);
    },

    async index(req, res){
        let terms = await Term.findAll({
            attributes: ['term', 'description']
        });
        res.send(terms);
    },

    async indexName(req, res){
        let term = await Term.findAll({
            attributes: ['term', 'description'],
            where: {
                term: req.params.term
            }
        });                  
        res.send(term);
    },

    async indexLetter(req, res){
        let term = await Term.findAll({
            attributes: ['term', 'description'],
            where: {
                letter: req.params.letter
            }
        });         
        res.send(term);
    },
    
};