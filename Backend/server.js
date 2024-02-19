const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const routes = require('./routes/routers');

const app = express();

const URI = process.env.MONGODB_URI;

(async () => {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
})();

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", routes);

app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});
