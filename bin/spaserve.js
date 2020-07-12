
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const express = require('express');
const dir = argv.dir || 'dist';
const notfoundroute = argv.notfoundroute || '404';
const port = argv.port || 5000;

const app = express();
app.use(express.static(dir));

// Handle 404s for SPA
app.use((req, res) => { // This middlware is called when express.static does not find the file
    if (req.path == '/' + notfoundroute) res.status(404);
    
    res.sendFile(path.resolve(dir + '/index.html'));
})

console.log('Listening on port ' + port);
app.listen(port);