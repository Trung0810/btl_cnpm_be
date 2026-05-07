const express = require("express");
const app = express();
const cors = require("cors");
const userRouterAPI = require("./routes/UserAPI");
const accountRouterAPI = require("./routes/AccountAPI");
const shoesRouterAPI = require("./routes/ShoesAPI");
const orderRouterAPI = require("./routes/OrderAPI");
const cartRouterAPI = require("./routes/CartAPI");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/v1/api", accountRouterAPI);
app.use("/v1/api", userRouterAPI);
app.use("/v1/api", shoesRouterAPI);
app.use("/v1/api", orderRouterAPI);
app.use("/v1/api", cartRouterAPI);

module.exports = app;
