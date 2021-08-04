import express, { Express } from "express";
import cors from "cors";

const app = express();

const applyMiddleware = (app: Express) => {
  if (process.env.NODE_ENV !== "test") {
    app.use(cors());
  }
  app.use(express.json());
};

applyMiddleware(app);

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

export { app };
