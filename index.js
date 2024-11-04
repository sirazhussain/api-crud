// Express aur body-parser import karte hain
import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js'; // Make sure this path is correct

// Express app banate hain
const app = express();
const PORT = 5000; // Port set karte hain

// JSON request handle karne ke liye body-parser middleware lagate hain
app.use(bodyParser.json());

// Users route ko middleware ke roop mein use karte hain
app.use('/users', usersRoutes); // Correct usage

// Home route banate hain
app.get("/", (req, res) => 
  res.send("hello home page")); // Response bhejte hain client ko

// Server ko listen karte hain aur message print karte hain
app.listen(PORT, () => console.log("hello world api"));
