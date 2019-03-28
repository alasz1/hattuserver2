
require('dotenv').config()

const encoding = require('encoding');

const Pool = require('pg').Pool;

const conopts = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  DATABASE_URL: process.env.DATABASE_URL,
  host: process.env.HOST,
  database: process.env.DATABASE,
  connectionString: process.env.DATABASE_URL,
  ssl: true,

  client_encoding: "utf-8"
  
};

// const pool = new Pool(conopts);
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

function getBingoData() {
  return pool.connect()
    .then(client => {
      let sql = "SELECT * FROM bingo ORDER BY RANDOM() LIMIT 16;";
      return client.query(sql)
        .then(res => {
          client.release();
          return res.rows;
        })
        .catch(err => {
          client.release();
          throw error;
        });
    });
};

function getGeneratorAjatus() {
  return pool.connect()
    .then(client => {
      let sql = "SELECT sentence FROM generator WHERE category='ajatus' ORDER BY RANDOM() LIMIT 1;";
      return client.query(sql)
        .then(res => {
          client.release();
          return res.rows;
        })
        .catch(err => {
          client.release();
          throw error;
        });
    });
};

function getGeneratorTsemppi() {
  return pool.connect()
    .then(client => {
      let sql = "SELECT sentence FROM generator WHERE category='tsemppi' ORDER BY RANDOM() LIMIT 1;";
      return client.query(sql)
        .then(res => {
          client.release();
          return res.rows;
        })
        .catch(err => {
          client.release();
          throw error;
        });
    });
};
function getGeneratorKiroilu() {
  return pool.connect()
    .then(client => {
      let sql = "SELECT sentence FROM generator WHERE category='kiroilu' ORDER BY RANDOM() LIMIT 1;";
      return client.query(sql)
        .then(res => {
          client.release();
          return res.rows;
        })
        .catch(err => {
          client.release();
          throw error;
        });
    });
};

module.exports = { getBingoData, getGeneratorAjatus, getGeneratorTsemppi, getGeneratorKiroilu };