// Libraries
import { Request, Response } from "express";

// importing model
import employeeModel from "../models/employee.model";

// importing helper functions
import { encrypt, verifyHash } from "../helper/hash";
import { generateAccessToken, generateRefreshToken } from "../auth/auth";

// register a new employee and save to database
export const registerEmployee = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = encrypt(password);

    const newEmployeeInstance = new employeeModel({
      username,
      email,
      password: hashedPassword,
    });
    const status = await newEmployeeInstance.save();
    const access_token = generateAccessToken(newEmployeeInstance.email, 2);
    return res.status(200).json({
      success: true,
      status,
      access_token,
    });
  } catch (err: any) {
    return res.status(409).json({
      success: false,
      error: err.message,
    });
  }
};

// get employee by email
export const loginEmployee = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const targetEntry = await employeeModel.findOne({ email });
    // if email exists
    if (targetEntry) {
      // if password does'nt matches
      if (!verifyHash(password, targetEntry.password)) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      } else {
        // generating new accesstoken
        const access_token = generateAccessToken(email, 2);
        // generating new refreshtoken
        const refresh_token = generateRefreshToken(email);
        return res.status(200).json({
          success: true,
          message: "Logged In",
          access_token,
          refresh_token
        });
      }
    }
    // if email does'nt exists
    else {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (err: any) {
    return res.status(409).json({
      success: false,
      error: err,
    });
  }
};
