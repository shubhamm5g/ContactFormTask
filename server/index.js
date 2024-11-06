const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./util/db");
const { errorMiddleware } = require("./middleware/errorMiddleware");
dotenv.config();
const app = express();
connectDb();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("access denied");
});

const commonRouter = require("./router/commonRouter");

app.use("/api/common", commonRouter);

app.use(errorMiddleware);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
