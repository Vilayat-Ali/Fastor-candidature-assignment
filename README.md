# Fastor Candidature Assignment

## Tech Stack

- TypeScript
- Express.js
- Mongoose
- MongoDB
- JWT

## Description

a backend for a customer relationship management(CRM) system.

## Requirements

- Database must be postgres/Mysql/Mongodb
- You are only required to design the REST API for above mentioned tasks
- You need to use Express Framework.
- You neeed to use JWT token

## Business Logic

- The CRM account is associated with each employee/counselor of the company with their
  email id.
- There is an enquiry form which is provided to every prospective client to fill their basic details
  i.e. Name, Email, Course interest etc. This form can be circulated online to capture leads or can
  be shared by the counselor itself after it has connected with the student via call.
- Inside the CRM, each employee/counselor can see all the enquiries that prospective clients
  have filled. We can say these are Public Enquiries that are visible to all the
  employees/counselors.
- Against each public enquiry, the employee/counselor has a choice to “Claim” it. Claiming it will
  assign the enquiry to only this counselor inside the CRM & this enquiry will no longer be publically

visible to any other employee. We can say that this is now a private enquiry.
