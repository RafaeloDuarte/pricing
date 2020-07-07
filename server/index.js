const express = require('express')
const compression = require("compression");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./src/graphql/schema')

const app = express()

// AMBIENTE
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 8000;

app.use(cors())

const db = require('./src/config/mongoDatabase.json')
mongoose.connect(db.dbTest)
const dbURI = isProduction ? db.dbProd : db.dbTest;
mongoose.connect(dbURI,
    {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    });

// CONFIGURACOES
if (!isProduction) app.use(morgan("dev"));
app.use(cors());
app.disable('x-powered-by');
app.use(compression());

// SETUP BODY PARSER
app.use(bodyParser.urlencoded({ extended: false, limit: 1.5 * 1024 * 1024 }));
app.use(bodyParser.json({ limit: 1.5 * 1024 * 1024 }));

// MODELS
require("./src/model");

// ROTAS
app.use("/", require("./src/routes"));

// ROTA GRAPHQL
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

// 404 - ROTA
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// ROTA - 422, 500, 401
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if (err.status !== 404) console.warn("Error: ", err.message, new Date());
    res.json(err);
});

//require('./adminbro.js')

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})