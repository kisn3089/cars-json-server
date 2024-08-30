require("dotenv").config();

const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter("routes.json");

server.use(middlewares);
server.use(
  rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
