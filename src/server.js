
const express = require('express');

const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static(`${__dirname}/app/css`));
app.use(express.static(`${__dirname}/app/img`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/app/index.html`);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
