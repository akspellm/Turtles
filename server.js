const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

const PORT = process.env.PORT || 5000

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT)
});