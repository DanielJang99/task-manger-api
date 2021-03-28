const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json()); // this is to parse incoming JSON into a JavaScript object which you can access on req.body
app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(port, () => {
    console.log("server is up and running on port " + port);
});
