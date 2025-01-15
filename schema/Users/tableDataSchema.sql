CREATE TABLE Users (
    userID INTEGER PRIMARY KEY AUTOINCREMENT, -- Auto-generated unique identifier
    username TEXT NOT NULL UNIQUE,           -- Unique username
    firstName TEXT NOT NULL,                 -- User's first name
    otherName TEXT,                          -- User's middle/other name (optional)
    lastName TEXT NOT NULL,                  -- User's last name
    password TEXT NOT NULL,                  -- User's password (hash recommended for security)
    dateCreated DATETIME DEFAULT CURRENT_TIMESTAMP, -- Timestamp of user creation
    lastLoggedIn DATETIME                    -- Timestamp of the last login
);

