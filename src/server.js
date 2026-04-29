const app = require("./App");
const connect = require("./config/DataBase");

(async () => {
  await connect();
  app.listen(8888, () => {
    console.log("Server running on port 8888");
  });
})();
