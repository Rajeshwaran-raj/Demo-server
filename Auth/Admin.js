const Auth = require("../Model/User");


const Admin=async(req,res)=>
{
    
    try {
        const allAuthData = await Auth.find(); // Retrieve all data
        res.json({data:allAuthData}); // Send the data as a JSON response
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
}

module.exports={Admin};