// POSTGRES Routes

const fs = require('fs');
const express = require('express');
const router = express.Router();

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

        //   fs.readFile('../pdata/test.json', 'utf8', (err, fd) => {
            //   utf-8 ?
            // if (err) {
            //     return console.log('FD error:',fd);
            // }
            // maybe already parsed
            // JSON.parse(fd).forEach(ele => {
            let fd = [
                {
                  "title": "Transmitting Open-source Arrays",
                  "category": "firewall",
                  "author": "Dr. Tressie Kuphal",
                  "authorUrl": "http://http://corrine.net",
                  "publishedOn": "2014-01-22",
                  "body": "## The RSS sensor is down, synthesize the open-source sensor so we"
                }
              ]
              console.log('FD: ',fd)
            fd.forEach(ele => {
             pgClient.query(`
                INSERT INTO
                articles(title, author, "authorUrl", category, "publishedOn", body)
                VALUES ($1, $2, $3, $4, $5, $6);
              `,
              [ele.title, ele.author, ele.authorUrl, ele.category, ele.publishedOn, ele.body]
              )
            })
        //   })
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