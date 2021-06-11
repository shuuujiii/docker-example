const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
     <h1>rebuildaa From Node Running Inside Docker</h1>
`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});