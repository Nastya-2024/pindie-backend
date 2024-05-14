const pagesRouter = require("express").Router();
const { sendIndex, sendDashboard } = require("../controllers/auth.js");

const { checkAuth, checkCookiesJWT } = require('../middlewares/auth');

pagesRouter.get("/", sendIndex);

// routes/pages.js
// Импорты и другие маршруты

// routes/pages.js
// Импорты и другие маршруты

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);

module.exports = pagesRouter;
