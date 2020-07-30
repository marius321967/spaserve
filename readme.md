Single Page App (SPA) file server based on *Express.js Static* middleware.

If the file is not found then requests will serve *index.html* with 200 status code. If user requests a special route (default: */404*) then index.html will be served with a 404 status code.

The tool runs a single port and does not provide HTTP to HTTPS redirects. For this, find a separate tool (Docker: [morbz/docker-web-redirect](https://hub.docker.com/r/morbz/docker-web-redirect/)).

### Arguments
- `--port=`
- `--dir=` the directory to serve static files from. Default: `dist`
- `--notfoundroute=` path (without leading `/`) which will return 404 statuses. SPAs can close & redirect to this route for a proper 404 response. Default route: `404`
- `--https=true` enables HTTPS instead of HTTP. Default: `false`. For self-signed certificates, see [Node.JS tutorial](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/)
- `--sslkey` filename of SSL private key. Default: `ssl/key.pem`
- `--sslcert` filename of SSL certificate. Default: `ssl/cert.pem`
- `--sslpassphrase` passphrase for SSL private key

Arguments can also be passed via uppercase environment variables.