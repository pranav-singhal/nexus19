// var sass = require('node-sass');
const express = require('express');
// var browserSync = require('browser-sync');
// var bs = browserSync.create();
// bs.init({ logSnippet: false});
// bs.reload("index.html");

var path = require('path');
bourbon  = require("bourbon").includePaths;
sassMiddleware = require('node-sass-middleware');
const app = express();
const port = 3000;
// console.log(__dirname);
// app.use(require('connect-browser-sync')(bs));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app/views'));


app.use(
    sassMiddleware({
        src: __dirname + '/scss',
        dest: __dirname + '/app',
        debug: true,
        includePaths: [bourbon]
    })
 );



app.use('/', express.static('app'));
app.get('/', function(req, res) {
    res.render('pages/index');
});
app.get('/team',function(req,res){
  res.render('pages/team');
})


app.listen(port,'0.0.0.0',() => console.log(`nexus19 listening on port ${port}!`))
