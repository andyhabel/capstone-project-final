const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const app = express();
const http = require('http');
const apiKey="vUElo7lW9yeWYOT7SBq6khXsGKuY6NJ37zaDa7e8OvORM_l8jMcxXVWncgT7fwPr"




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('pages/index', { song: null, error: null });
});

app.post('/', function (req, res) {
    const rndInt = Math.floor(Math.random() * 200000) + 1
    console.log(rndInt)
	const song = "16785"
    const url = `http://api.genius.com/songs/${rndInt}`;
	//console.log(url)
	
var options = {
  'method': 'GET',
  'url': `${url}`,
  'headers': {
    'Authorization': 'Bearer vUElo7lW9yeWYOT7SBq6khXsGKuY6NJ37zaDa7e8OvORM_l8jMcxXVWncgT7fwPr'
  }
};

console.log(options)
		
request(options, function (error, response) {
  if (error) res.render('pages/index', { song: null, error: 'Error'});
  console.log(response.body);
  const song = JSON.parse(response.body);
  
  const title = (song["response"]["song"]["full_title"]);
  const artist = (song["response"]["song"]["artist_names"]);
  const songid = (song["response"]["song"]["id"]);
  
  
    const songinfo = `You picked ${title}`;
	
    console.log(songinfo)
	
   res.render('pages/index', { song: songinfo, error: null });
    
   
});
		
	
	

});

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.render('pages/index');
});

app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
