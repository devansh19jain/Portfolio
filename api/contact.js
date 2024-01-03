// api/contact.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const formData = req.body; // Access the incoming JSON data from the request
        // Perform necessary processing with the formData
        // Send a response indicating success or failure
        res.status(200).json({ code: 200, message: 'Message received successfully' });
      } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).json({ code: 500, message: 'Internal server error' });
      }
    } else {
      res.status(405).json({ code: 405, message: 'Method Not Allowed' });
    }
  }
  