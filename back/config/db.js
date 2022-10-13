const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://` +
      process.env.DB_USER_PASS +
      `@cluster0.ek3m7.mongodb.net/TODOList`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Failed to connect to MongoDB", e));
