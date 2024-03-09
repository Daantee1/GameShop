const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const { format } = require('date-fns');
const bcrypt = require('bcrypt');



app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gameshop",
});

app.get("/", (req, res) => {
  return res.json("Hello World");
});

app.post("/api/users/add", async (req, res) => {
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRound);
  let details = {
    email: req.body.email,
    username: req.body.username,
    password: hashedPassword,
  };
  let sql = "INSERT INTO users SET ?";
  db.query(sql, details, (err) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database insertion error", error });
    } else {
      res.send({ status: true, message: "User added successfully" });
    }
  });
});

app.get("/api/users", async (req, res) => {
  let sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database selection error", error });
    } else {
      res.send({ status: true, message: "User list", result });
    }
  });
});

app.get("/api/users/:id", async (req, res) => {
  const userId = req.params.id;
  let sql = "SELECT * FROM users WHERE id=" + userId;
  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database selection error", error });
    } else {
      res.send({ status: true, message: "User details", result });
    }
  });
});
app.delete("/api/users/delete/:id", async (req, res) => {
  let sql = "DELETE FROM users WHERE id=?";
  db.query(sql, req.params.id, (err) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database deletion error", err });
    } else {
      res.send({ status: true, message: "User deleted successfully" });
    }
  });
});

app.get("/api/users/checkEmail/:email", async (req, res) => {
  const email = req.params.email;
  const sql = "SELECT * FROM users WHERE email= ?";
  db.query(sql, email, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database selection error", error });
    } else {
      if (result.length > 0) {
        res.send({ status: false, message: "Email already exists" });
      } else {
        res.send({ status: true, message: "Email is available" });
      }
    }
  });
});
app.get("/api/users/checkUsername/:username", async (req, res) => {
  const email = req.params.username;
  const sql = "SELECT * FROM users WHERE username= ?";
  db.query(sql, email, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database selection error", error });
    } else {
      if (result.length > 0) {
        res.send({ status: false, message: "Username already exists" });
      } else {
        res.send({ status: true, message: "Username is available" });
      }
    }
  });
});

app.get("/api/users/login/:email/:password", async (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  const sql = "SELECT * FROM users WHERE email= ?";
  db.query(sql, [email], async (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database selection error", error });
    } else {
      if (result.length > 0) {
        const match = await bcrypt.compare(password, result[0].password);
        if (match) {
          res.send({ status: true, message: "Login successful", result });
        } else {
          res.send({ status: false, message: "Login failed" });
        }
      } else {
        res.send({ status: false, message: "Login failed" });
      }
    }
  });
});

app.post("/api/orders/add", async (req, res) => {
  const cartData = req.body.cartData;
  const userData = req.body.userData;

  let names = cartData.map(product => product.title).join(", ");
  const formattedDate = format(new Date(), "dd-MM-yyyy HH:mm:ss");
  console.log(formattedDate);
  let details = {
    name: names,
    date: formattedDate,
    userId: userData[0].id
  }

  let sql = "INSERT INTO orders SET ?";
  db.query(sql, details, (err) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database insertion error", error: err });
    } else {
      res.send({ status: true, message: "Order added successfully" });
    }
  })
});

app.delete("/api/orders/delete/:id", async (req, res) => {
  
  let sql = "DELETE FROM orders WHERE id=?";
  db.query(sql, req.params.id, (err) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database deletion error", error });
    } else {
      res.send({ status: true, message: "Product deleted successfully" });
    }
  });
});

app.get("/api/orders", async (req, res)=> {
  let sql = "SELECT * FROM orders";
  db.query(sql, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database selection error", error });
    } else {
      res.send({ status: true, message: "Product list", result });
    }
  });
})

app.get("/api/orders/:id", async (req, res)=> {
  const userId = req.params.id;
  let sql = "SELECT * FROM orders WHERE userId = ?";
  db.query(sql, userId, (err, result) => {
    if (err) {
      res
        .status(500)
        .send({ status: false, message: "Database selection error", error });
    } else {
      res.send({ status: true, message: "Product list", result });
    }
  });
})

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});

db.connect((err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Database Connected Successful!");
  }
});
