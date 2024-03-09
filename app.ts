import express from "express";
import cors from "cors";
import issueRouter from "./routes/issue";
const app = express();
const APP_PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/issue", issueRouter);

app.listen(APP_PORT, () => {
  console.log(`App listeting on port ${APP_PORT}`);
});
