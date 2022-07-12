// Libraries
import { Request, Response } from "express";

// importing model
import enquiryModel from "../models/enquiry.model";

// Get all enquiries
export const getAllEnquiriesWithoutClaim = async (
  req: Request,
  res: Response
) => {
  try {
    const allEnquiries = await enquiryModel.find({ claim_status: false }); // not show enquiries that are already taken or claimed
    return res.status(200).json({
      success: true,
      enquiries: allEnquiries,
    });
  } catch (err: any) {
    return res.status(409).json({
      success: false,
      error: err,
    });
  }
};

// Get all enquiries that are claimed
export const getAllEnquiriesWithClaim = async (req: Request, res: Response) => {
  try {
    const allEnquiries = await enquiryModel.find({ claim_status: true }); //  show enquiries that are already taken or claimed
    return res.status(200).json({
      success: true,
      enquiries: allEnquiries,
    });
  } catch (err: any) {
    return res.status(409).json({
      success: false,
      error: err,
    });
  }
};

// Add new enquiry
export const addEnquiry = async (req: Request, res: Response) => {
  try {
    const { name, email, course } = req.body;
    const newEnquiry = new enquiryModel({
      name,
      email,
      course,
      claim_status: false, // default
    });
    const status = newEnquiry.save();
    return res.json({
      success: true,
    });
  } catch (err: any) {
    return res.status(409).json({
      success: false,
      error: err,
    });
  }
};

// claiming the enquiry or lead
export const claimTheLead = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const status = await enquiryModel.findByIdAndUpdate(id, {
      claim_status: true,
    });
    return res.json({
      success: true,
      status,
    });
  } catch (err: any) {
    return res.status(409).json({
      success: false,
      error: err,
    });
  }
};
