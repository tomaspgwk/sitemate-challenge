import express from "express";
import cors from "cors";
import issueRouter from "./routes/issue";
const app = express();
const APP_PORT = 3000;

// Allow CORS Origin for the client specific port only.
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Add Issue CRUD route
app.use("/issue", issueRouter);

app.listen(APP_PORT, () => {
  console.log(`App listeting on port ${APP_PORT}`);
});
