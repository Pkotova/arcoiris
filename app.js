const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
app.use(express.static(__dirname + '/public/'));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index.js'));

// Listen on Port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));