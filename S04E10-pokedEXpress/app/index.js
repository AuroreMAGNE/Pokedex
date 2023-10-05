const express = require('express');
const app = express();

require('dotenv').config();

const router = require('./router');
const PORT = process.env.PORT;

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('./app/public'));

app.use(router);

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
