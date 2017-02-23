"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const DataHelpers = require("./lib/data-helpers.js");
const tweetsRoutes = require("./routes/tweets");

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes(DataHelpers(db, "tweets")));
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

