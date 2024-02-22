const express = require("express");
const mongoose = require("mongoose");
// const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");
// const productRouter = require("./routes/product");
// const userRouter = require("./routes/user");

require("dotenv").config();
AmazonDB_Uri = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3000;
const app = express();
const DB = AmazonDB_Uri;

app.use(express.json());
app.use(authRouter);
// app.use(adminRouter);
// app.use(productRouter);
// app.use(userRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "https://dummy-server-alpha.vercel.app", () => {
  console.log(`connected at port ${PORT}`);
});
