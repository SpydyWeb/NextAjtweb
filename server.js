const path = require('path');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // In production, serve static files from the build directory
  if (!dev) {
    server.use('/_next/static', express.static(path.join(__dirname, 'build/static')));
    server.use('/static', express.static(path.join(__dirname, 'build/static')));
  }

  // Handle all routes through Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});