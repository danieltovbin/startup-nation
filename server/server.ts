import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`app listening on PORT : ${PORT}❤️`);
});
