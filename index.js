const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});



app.listen(3000, ()=> {
	console.log('Server started')
})




module.exports = app;