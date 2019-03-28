const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var parser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
var router = express.Router();
//const fs = require('fs');

app.use(express.static("public"));

const dbserv = require("./dbservice");
var cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Get Messages from Bingo
app.get('/api/bingo', function (req, res) {
    dbserv.getBingoData().then(data => { res.json(data) });
 })

// get generator ajatus
app.get('/api/ajatus', function (req, res) {
    dbserv.getGeneratorAjatus().then(data => { res.json(data) });
})

app.get('/api/tsemppi', function (req, res) {
    dbserv.getGeneratorTsemppi().then(data => { res.json(data) });
})

app.get('/api/kiroilu', function (req, res) {
    dbserv.getGeneratorKiroilu().then(data => { res.json(data) });
})

app.use('/api', router);

app.listen(process.env.PORT || 5000);
