const express = require("express");
const mongoose = require("mongoose")
const app = express();
// server.js
mongoose.connect(
    'mongodb://nabeshi:mypassword@mongo:27017/?authSource=admin',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log('successfully connected to DB') })
    .catch(err => { console.log(err) })
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
     <h1>rebuildaa From Node Running Inside Docker</h1>
`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});