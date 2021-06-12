const express = require("express");
const mongoose = require("mongoose")
const app = express();
const postRouter = require('./routes/postRoutes')
const authRouter = require('./routes/authRoutes')
// server.js
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config")

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
const connectWithRetry = () => {
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => { console.log('successfully connected to DB') })
        .catch(err => {
            console.log(err)
            setTimeout(connectWithRetry, 5000)
        })
}
connectWithRetry()
// mongoose.connect(mongoURL,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//     })
//     .then(() => { console.log('successfully connected to DB') })
//     .catch(err => { console.log(err) })
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.get("/", (req, res) => {
    res.send(`
     <h1>rebuildaa From Node Running Inside Docker</h1>
`);
});

app.use('/posts', postRouter)
app.use('/users', authRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});