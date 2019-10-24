const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');
const occurrenceController = require('./controllers/occurrenceController');
const termController = require('./controllers/termController');

////////////////////// USER //////////////////////////////////////////////////////////////////

routes.post('/newuser', userController.store); // registrar usuário
  
routes.get('/users', userController.index); // buscar todos usuários

routes.post('/users/:name', userController.indexName); // buscar usuário por nome

routes.get('/users/:id', userController.indexId); // buscar usuário por id

routes.post('/login/:username&:password', userController.login); // fazer login

////////////////////// OCCURRENCE ///////////////////////////////////////////////////////////

routes.post('/newoccurrence', occurrenceController.store); // registrar ocorrência
  
routes.get('/occurrences', occurrenceController.index); // buscar todas ocorrências aprovadas

routes.get('/5occurrences', occurrenceController.indexLastFive); // buscar 5 ultimas ocorrências aprovadas

routes.get('/occurrencesnot', occurrenceController.indexNotApproved); // buscar todas ocorrências não aprovadas

routes.post('/occurrences/:nome', occurrenceController.indexName); // buscar ocorrência por nome

routes.post('/occurrences/id/:id', occurrenceController.indexId); // buscar ocorrência por id

routes.post('/occurrences/aprove/:id&:admin', occurrenceController.aprove); // aprovar ocorrência

////////////////////// TERM ////////////////////////////////////////////////////////////////

routes.post('/newterm', termController.store); // registrar termo
  
routes.get('/terms', termController.index); // buscar todos termos aprovados

routes.get('/termsnot', termController.indexNotApproved); // buscar todos termos não aprovadas

routes.post('/terms/:term', termController.indexName); // buscar termo por nome

routes.post('/terms/letter/:letter', termController.indexLetter); // buscar termo por id

routes.post('/terms/aprove/:id&:admin', termController.aprove); // aprovar termo


module.exports = routes;