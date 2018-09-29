// POSTGRES Routes

const fs = require('fs');
// const pg = require('pg');
const express = require('express');
const router = express.Router();
// const PORT = process.env.PORT||3000;
// const conString = 'postgres://localhost:5432';

// const pgClient = require('../../index.js')

const { Client } = require('pg')

const pgClient = new Client({
    host: 'psql',
    port: 5432,
    user: `${process.env.POSTGRES_USER}`,
    password: `${process.env.POSTGRES_PASSWORD}`,
  });

pgClient.connect((err) => {
    if (err) {
      console.error('PSQL connection ERROR', err.stack)
    } else {
      console.log('connected to POSTGRES')
    }
  })

router.get('/articles', (req, res) => {
    pgClient.query(`SELECT * FROM articles`)
        .then((result)=>{
        res.send(result.rows);
        })
        .catch(err => {
        console.error(err)
        });
})

loadDB();

function loadArticles() {
    pgClient.query('SELECT COUNT(*) FROM articles;')
      .then(result => {
        if(!parseInt(result.rows[0].count)) {
          fs.readFile('../pdata/test.json', 'utf8', (err, fd) => {
            if (err) {console.log('FS error:',err);}
            JSON.parse(fd).forEach(ele => {
             pgClient.query(`
                INSERT INTO
                articles(title, author, "authorUrl", category, "publishedOn", body)
                VALUES ($1, $2, $3, $4, $5, $6);
              `,
              [ele.title, ele.author, ele.authorUrl, ele.category, ele.publishedOn, ele.body]
              )
            })
          })
        }
      })
  }
  
  function loadDB() {
    pgClient.query(`
      CREATE TABLE IF NOT EXISTS articles (
        article_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        "authorUrl" VARCHAR (255),
        category VARCHAR(20),
        "publishedOn" DATE,
        body TEXT NOT NULL);`
    )
      .then(() => {
        loadArticles();
      })
      .catch(err => {
        console.error(err);
      });
  }

  module.exports = router;