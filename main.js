// var sass = require('node-sass');
const express = require('express');
var browserSync = require('browser-sync');
var bs = browserSync.create();
bs.init({ logSnippet: true, proxy: 'localhost:3000' });
bs.reload("index.html");

var path = require('path');
bourbon  = require("bourbon").includePaths;
sassMiddleware = require('node-sass-middleware');
const app = express();
const port = 3000;
// console.log(__dirname);
app.use(
    sassMiddleware({
        src: __dirname + '/scss',
        dest: __dirname + '/app',
        debug: true,
        includePaths: [bourbon]
    })
 );
 app.use(require('connect-browser-sync')(bs));


app.use('/', express.static('app'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
