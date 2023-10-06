const mongoose = require('mongoose');

// Replace 'your-database-name' with your actual database name
const dbURI = 'mongodb+srv://rajeshwaranraj2002:rajeshwaranraj2002@cluster0.egrteb5.mongodb.net/?retryWrites=true&w=majority';

// Create a function to connect to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
};

module.exports = connectToDatabase;
