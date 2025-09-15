const { createServer } = require("http");
const next = require("next");

const dev = true; // production
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(process.env.PORT || 8009, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:8009");
  });
});
