// Libraries
import express from "express";

// importing controller function
import {
  getAllEnquiriesWithoutClaim,
  getAllEnquiriesWithClaim,
  addEnquiry,
  claimTheLead,
} from "../controllers/enquiry.controller";

// importing authMiddleware
import authMiddleware from "../middleware/authMiddleware";

// defining router
const enquiryRouter = express.Router();

// register a new user
enquiryRouter.get("/get/no-claim", getAllEnquiriesWithoutClaim);
enquiryRouter.get("/get/claim", getAllEnquiriesWithClaim);
enquiryRouter.post("/add", addEnquiry);
enquiryRouter.put("/claim", claimTheLead);

// exporting router
export default enquiryRouter;
