const knex = require('knex');
const configuration = require('../../knexfile');

//define se a configuração do banco será de teste ou desenvolvimento
//variável de ambiente NODE_ENV definida no package.json
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;
