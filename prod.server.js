const express = require('express')
const app = express()

app.use(express.static('./dist'))

const port = process.env.PORT || 3000
module.exports = app.listen(port, function (err) {
  if (err) {
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
