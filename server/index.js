const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");

const router = express.Router();

const PORT = 8000;
const CORS_ACCEPT_ORIGIN = "http://localhost:3000";

const app = express();

app.use(cors({ origin: [CORS_ACCEPT_ORIGIN], credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get("/name", (_, res, next) => {
  try {
    res.json({ name: faker.person.fullName() });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/age", (_, res, next) => {
  try {
    res.json({ age: Math.floor(Math.random() * 90) + 1 });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
