// Libraries
import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import consola from "consola";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

// environment variables
dotenv.config();

// app configs
const app = express();
const port = Number(process.env.PORT || 8000);

// connecting to database
try {
  connect(process.env.DB_URI!, () => {
    consola.info(`Connect to database.`);
  });
} catch (err: any) {
  consola.fatal(`Database Connection Error : ${err}`);
}

// applying middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

// importing routes
import employeeRouter from "./routes/employee.route";
import enquiryRouter from "./routes/enquiry.route";

// applying routes
app.use("/api/staff", employeeRouter);
app.use("/api/enquiry", enquiryRouter);

// app listening
app.listen(port, () => {
  consola.success(`Server rolling at port. ${port}`);
});
