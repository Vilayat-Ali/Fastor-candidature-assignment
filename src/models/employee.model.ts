// Libraries
import { Schema, model } from "mongoose";

export interface employeeSchemaType {
  username: string;
  email: string;
  password: string;
}

const employeeSchema = new Schema<employeeSchemaType>({
  username: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const employeeModel = model("employee", employeeSchema);

export default employeeModel;
