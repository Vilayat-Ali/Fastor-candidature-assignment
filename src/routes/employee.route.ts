// Libraries
import express from "express";

// importing controller function
import { registerEmployee, loginEmployee } from "../controllers/employee.controller";

// defining router
const employeeRouter = express.Router();

// register a new user
employeeRouter.post("/register", registerEmployee);
employeeRouter.post("/login", loginEmployee)

// exporting router
export default employeeRouter;
