require("dotenv").config();

const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter({
  "/api/*": "/$1",
  "/carClasses/:carClassId": "/carClass?carClassId=:carClassId",
});

server.use(middlewares);
server.use(rewriter);
server.use(router);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// "/carClasses/:carClassId": "/carClass?carClassId=:carClassId",
