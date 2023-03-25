exports.handler = function(event, context, callback) {
    // Your API code goes here
    
    // Add the necessary CORS headers
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type"
    };
    
    // Return the response with the CORS headers
    callback(null, {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({message: "Hello, World!"})
    });
  }
  