const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    console.log('test')
    res.send(`
     <h1>aHello From Node Running Inside Docker</h1>
`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});