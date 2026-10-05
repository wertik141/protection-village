const { PeerServer } = require('peer');
const port = process.env.PORT || 10000;

PeerServer({
  port: port,
  path: '/',
  allow_discovery: true,
  proxied: true
});

console.log('✅ PeerJS server started on port ' + port);
