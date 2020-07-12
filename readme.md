Single Page App (SPA) file server based on *Express.js Static* middleware.

If the file is not found then requests will serve *index.html* with 200 status code. If user requests a special route (default: */404*) then index.html will be served with a 404 status code.

### Arguments
- `--port=`
- `--dir=` the directory to serve static files from. Default: `dist`
- `--notfoundroute=` path (without leading `/`) which will return 404 statuses. SPAs can close & redirect to this route for a proper 404 response. Default route: `404`
