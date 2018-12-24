// var sass = require('node-sass');
const express = require('express');
const firebase = require('firebase');
require('firebase/firestore');

var config = {
  apiKey: 'AIzaSyDyC96e22W83WWLGVszg1g-D5_cX6aEEHQ',
  authDomain: 'nexus19-zombie.firebaseapp.com',
  databaseURL: 'https://nexus19-zombie.firebaseio.com',
  projectId: 'nexus19-zombie',
  storageBucket: 'nexus19-zombie.appspot.com',
  messagingSenderId: '58844651501'
};
firebase.initializeApp(config);
var database = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
database.settings(settings);

var document = database.collection('event-details').doc('FLyCv8uputIwdBq380lD');
// doc.get().then(doc => {
//   console.log(doc.data().acapella);
// });
// var browserSync = require('browser-sync');
// var bs = browserSync.create();
// bs.init({ logSnippet: false});
// bs.reload("index.html");

var path = require('path');
bourbon = require('bourbon').includePaths;
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

app.get('/team', function(req, res) {
  res.render('pages/team');
});
app.get('/events', (req, res) => {
  res.render('pages/events');
});

app.get('/gallery', (req, res) => {
  res.render('pages/index');
});

app.get('/contact-us', (req, res) => {
  res.render('pages/contact-us');
});
app.get('/about-nexus', (req, res) => {
  res.render('pages/about-nexus');
});
app.get('/past-sponsors', (req, res) => {
  res.render('pages/past-sponsors');
});
app.get('/get_modal_content', (req, res) => {
  console.log(req.query);
  const content = req.query.modal_name;
  document.get().then(doc => {
    console.log(typeof doc.data()[content]);
    modal_content = doc.data()[content];
    res.render('partials/modal', { content: modal_content });
  });
});
app.listen(process.env.PORT || port, '0.0.0.0', () =>
  console.log(`nexus19 listening on port ${port}!`)
);
