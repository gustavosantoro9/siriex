const { User } = require('../models');

module.exports = {

    async store(req, res){
        const user = await User.create(req.body);
        res.send(user);
    },

    async index(req, res){
        let users = await User.findAll({
            attributes: ['name', 'email', 'admin']
        });
        res.send(users);
    },

    async indexName(req, res){
        let user = await User.findAll({
            attributes: ['name', 'email', 'admin'],
            where: {
                name: req.params.name
            }
        });                  
        res.send(user);
    },

    async indexId(req, res){
        let user = await User.findAll({
            attributes: ['name', 'email', 'admin'],
            where: {
                id: req.params.id
            }
        });         
        res.send(user);
    },

    async login(req, res){
        var username = req.params.username;
        var password = req.params.password;
        
        let user = await User.findAll({
            attributes: ['email', 'password', 'admin'],
            where: {
                email: username,
                password: password
            } 
        });

        if(user[0]){
            res.send(user);
        }
        else{
            res.send(false);
        }
        
    }
    
};