const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const eslintConfigAirbnb = require('eslint-config-airbnb');
const cart = require('./cartRouter')

const app = express();
app.use(express.json());
app.use('/', express.static('public'))
app.use('/api/cart', cart);

app.get('/api/products', (req, res) => {
  fs.readFile('server/db/getProducts.json', 'utf8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({
        result: 0,
        text: err
      }));
    } else {
      res.send(data);
    }
  });
});

app.post('/addToCart', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{"result": 0}');
    } else {
      const cart = JSON.parse(data);
      const item = req.body;

      cart.push(item);

      fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log('server!')
})