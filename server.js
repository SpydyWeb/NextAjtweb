const { createServer } = require("http");
const next = require("next");

const dev = false; // production mode
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const port = process.env.PORT || 8009;
  
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) {
      console.error("Server failed to start:", err);
      process.exit(1);
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});
