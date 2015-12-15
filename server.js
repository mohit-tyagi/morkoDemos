require('marko/node-require').install();
var app = require('express')();


app.get('/', require('./src/pages/home/index.js'));
app.get('/simple', require('./src/pages/simple/simple.js'));
app.get('/looping', require('./src/pages/looping/looping.js'));
app.get('/conditionals', require('./src/pages/conditionals/conditionals.js'));


app.listen(3000, function(){
	console.log('Server starts on port: 3000');
});



