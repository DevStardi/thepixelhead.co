const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public', {
    extensions: ['html', 'htm'],
}));

app.listen(port, () => {
  console.log('server running at:  http://localhost:' + port);
});