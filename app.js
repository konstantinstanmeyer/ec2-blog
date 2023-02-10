const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ message: "App works!" }))

app.listen(3001, () => console.log("Server is running!"));