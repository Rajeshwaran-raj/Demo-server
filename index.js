// Import necessary modules
const express = require('express');
const connectToDatabase = require('./Connection');
const routers = require('./Routes');
const Auth = require('./Model/User');
const cors = require('cors');
const formData = require('express-form-data');

// Create an Express application
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(formData.parse());
app.use("", routers);
const port = process.env.PORT || 8001;
connectToDatabase();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


