const express = require('express')

const PORT = process.env.PORT || 8080
const app = express()

// eslint-disable-next-line no-path-concat
app.use(express.static(__dirname + '/dist/'))
app.get(/.*/, (req, res) => {
  // eslint-disable-next-line no-path-concat
  res.send(__dirname + '/dist/index.html')
})
app.listen(PORT)

