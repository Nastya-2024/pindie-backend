// controllers/auth.js

const users = require("../models/user.js");
// Другие импорты
const jwt = require("jsonwebtoken");

const path = require("path");

// Код контроллера
// controllers/auth.js

// Импорты

const login = (req, res) => {
    const { email, password } = req.body;
  
    users
      .findUserByCredentials(email, password)
      .then((user) => {
          const token = jwt.sign({ _id: user._id }, "some-secret-key", {
          expiresIn: 3600
        });
        return { user, token };
      })
      .then(({ user, token }) => {
        res
          .status(200)
          .send({
              _id: user._id, 
              username: user.username, 
              email: user.email, 
              jwt: token });
            })
      .catch(error => {
        res.status(401).send({ message: error.message });
      });
  };

// Импорты и другие функции-контроллеры

const sendIndex = (req, res) => {
    if (req.cookies.jwt) {
      try {
        jwt.verify(req.cookies.jwt, "some-secret-key");
        return res.redirect("/admin/dashboard");
      } catch (err) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      }
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  };

  // Другие функции-контроллеры

const sendDashboard = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/admin/dashboard.html"));
  };


// Не забываем экспортирвать функцию 
module.exports = { 
    login, 
    sendIndex,
    sendDashboard
};
