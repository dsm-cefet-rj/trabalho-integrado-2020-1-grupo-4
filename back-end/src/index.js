const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const passport = require("passport");
const { forOwn } = require("lodash");

const {appConfig, dbConfig} = require("./config");

const routes = require("./routes");


mongoose
.connect(
    dbConfig.url,
    {useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => {
    console.log("Successfully connected to the database.");
}, (err) => { console.log(err); } );

const app = express();

app.use(cors({origin: '*'}));
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use(express.json());

app.use(passport.initialize());

forOwn(routes, ( value, key ) => { app.use(`/api/${key}`, value) });


app.listen(appConfig.port, () => {
    console.log(`Server listening on port ${appConfig.port}`)
});
