var app = require('express')();

var mobileApp = require('azure-mobile-apps')();

mobileApp.tables.add('Post');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);