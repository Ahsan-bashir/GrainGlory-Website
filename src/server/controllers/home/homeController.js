const path = require('path');

exports.homepage =(req,res)=>{
    try {
        // Construct the absolute path to the index.html file
        const indexPath =  path.join(__dirname,'..','..','..','views', 'index.html');
    
        // Send the index.html file as the response
        res.sendFile(indexPath);
        
      } catch (error) {
        // Handle errors, e.g., file not found
        console.error(error);
        res.status(500).send("Can't find index.html file");
      }
}


