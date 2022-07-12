// Libraries
import { Schema, model } from "mongoose";

export interface enquirySchemaType {
  name: String;
  email: String;
  course: String;
  claim_status: Boolean;
}

const enquirySchema = new Schema<enquirySchemaType>({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  claim_status: {
    type: Boolean,
    required: true,
  },
});

const enquiryModel = model("enquiry", enquirySchema);

export default enquiryModel;
