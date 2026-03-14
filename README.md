Gallery CRUD Application

A simple Node.js + Express API that allows users to upload and manage images using CRUD operations.
Images are uploaded using Multer and stored locally in an uploads folder, while image data is stored in MongoDB.

Technologies Used

Node.js

Express.js

MongoDB

Mongoose

Multer

Joi (Validation)

Postman (Testing)

Project Structure
galleryApp
│
├── controller
│   └── imageController.js
│
├── controller/validation
│   └── imageValidation.js
│
├── middleware
│   └── imageMiddleware.js
│
├── models
│   └── images.js
│
├── Routes
│   └── imageRoute.js
│
├── uploads
│
├── app.js
├── package.json
└── .gitignore
API Endpoints
Upload Image

POST

/api/upload

nstallation

Clone the repository:

git clone https://github.com/Ahmedma1her/GalleryApp.git

Install dependencies:

npm install

Run the server:

npm start
Testing

The API was tested using Postman.

Author

Ahmed Maher

Body (form-data)

Key	Type
title	text
image	file
