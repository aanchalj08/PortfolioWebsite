const express = require('express');
const connectDB = require('./db');
const path = require('path');
const Messages=require('./collections/Messages');
const cors = require('cors');


connectDB();


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname,'..', 'frontend', 'build')));


app.post("/submit-form", async (req, res) => {
  try {
    const { userName,userEmail,userMessage} = req.body;

    if (!userName || userName.trim().length===0 || typeof userName!=="string") {
      return res.status(400).json({ success: false, error: "Please enter a valid  name" });
    }
    if (!userEmail) {
        return res.status(400).json({ success: false, error: 'Please enter a valid email' });
      }
  
      if (!userMessage || userMessage.trim().length===0 || typeof userMessage!=="string") {
        return res.status(400).json({ success: false, error: 'Please enter a valid message' });
      }


    const newMessages = new Messages({
      name: userName,
      email:userEmail,
      message:userMessage
    });

    const savedMessage = await newMessages.save();
    console.log("Message saved:", savedMessage);


    res.json({ success: true });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ success: false, error: "Error saving data" });
  }
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'..', 'frontend', 'build','index.html'));
});



app.listen(8000, () => {
  console.log('Server started on port 8000');
});