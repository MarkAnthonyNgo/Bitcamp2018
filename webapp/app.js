const express = require('express')
const app = express()

var path = require("path");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './http', 'home.html'));
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
