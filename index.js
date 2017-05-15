const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const stream = require('youtube-audio-stream');



const app = express();
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
  console.log('Node app is running on port:', app.get('port'));
  
});

const env = process.env.NODE_ENV || 'development';




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', function(req, res, next){
	stream(`https://www.youtube.com/watch?v=FHkMT1Vxi5I`).pipe(res)
});

// app.use(express.static(path.join(__dirname, '../public')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });


/* eslint no-unused-vars: "off" */
// Requires 4 parameters in order to be treated as a error handler

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
