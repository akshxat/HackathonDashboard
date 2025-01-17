import express from 'express';
import db from '../utils/db.js';
import bcrypt from 'bcrypt';

// Create router for express to route requests to
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));

// Function to hash user password
function hashPassword(plainPassword) {
  const salt = bcrypt.genSaltSync(10); // Generate salt with 10 rounds
  return bcrypt.hashSync(plainPassword, salt); // Hash the password
}

// Create users table if it doesn't exist
const createUserTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS Users (
    userID INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    firstName TEXT,
    otherName TEXT,
    lastName TEXT,
    password CHAR(60) NOT NULL,
    dateCreated TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    lastLoggedIn TEXT
  );
`);
createUserTable.run();

// Insert a user into the database with a hashed password (only for initial setup)
// In future user data to be encrypted will be gotten from the create new user form
const username = "titans";
const password = "password123"; // Plain password
const hashedPassword = hashPassword(password);  // Correctly hash the password

try {
  const statement = db.prepare(`
    INSERT INTO Users (username, password, firstName, lastName)
    VALUES (?, ?, ?, ?)
  `);

  statement.run(username, hashedPassword, "First", "Last");
} catch (err) {
  if (err.message.includes("UNIQUE constraint failed")) {
    console.log("Error: Username already taken");
  } else {
    console.error("Error inserting user:", err);
  }
}

//Endpoint to validate login credentials
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const statement = db.prepare('SELECT password FROM Users WHERE username=?');
    const result = statement.get(username);

    if (!result) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare the entered password with the stored hash using async/await
    const isMatch = await bcrypt.compare(password, result.password);
    
    if (isMatch) {
      // Update the last login time
      const currentTimestamp = new Date().toISOString();
      const updateStatement = db.prepare('UPDATE Users SET lastLoggedIn = ? WHERE username = ?');
      updateStatement.run(currentTimestamp, username);

      return res.status(200).json({ message: 'Login successful!' });
    } else {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Database Error' });
  }
});

export default router;