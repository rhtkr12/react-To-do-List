const express = require('express');

const app = express();
const port = 5000;

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Set Engine
app.set('view engine', 'ejs');

// Navigating
app.get('', (req, res) => {
  res.render('index');
});

app.get('/displaytutorial', (req, res) => {
  res.render('displaytutorial');
});

//Listing on port
app.listen(port, () => console.log(`Server is listning on ${port}...`));
