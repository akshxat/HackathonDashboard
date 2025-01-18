CREATE TABLE Campus (
    campus_id INTEGER PRIMARY KEY AUTOINCREMENT,
    campus_name TEXT NOT NULL
);

INSERT INTO Campus (campus_name) VALUES 
('IT Campus'),
('Sydney Waterfront Campus');

CREATE TABLE Department (
    department_id INTEGER PRIMARY KEY AUTOINCREMENT,
    campus_id INTEGER NOT NULL,
    department_name TEXT NOT NULL,
    FOREIGN KEY (campus_id) REFERENCES Campus (campus_id)
);


INSERT INTO Department (campus_id, department_name) VALUES 
(1, 'Data Science'),
(1, 'Mechanical Engineering'),
(1, 'Business'),
(1, 'Pharmaceutical Studies'),
(2, 'Art & Design'),
(2, 'Healthcare Management'),
(2, 'Education'),
(2, 'Marine');

CREATE TABLE Room_Workshop (
    room_id INTEGER PRIMARY KEY AUTOINCREMENT,
    department_id INTEGER NOT NULL,
    room_name TEXT NOT NULL,
    room_type TEXT NOT NULL,
    store_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES Department (department_id)
);

INSERT INTO Room_Workshop (department_id, room_name, room_type) VALUES 
(1, 'Lab 101', 'Lab'),
(1, 'Lab 102', 'Lab'),
(1, 'Classroom 103', 'Classroom'),
(1, 'Lecture Hall 104', 'Lecture'),
(2, 'Workshop 201', 'Workshop'),
(2, 'Workshop 202', 'Workshop'),
(2, 'Classroom 203', 'Classroom'),
(2, 'Lecture Hall 204', 'Lecture'),
(3, 'Lab 301', 'Lab'),
(3, 'Workshop 302', 'Workshop'),
(3, 'Classroom 303', 'Classroom'),
(3, 'Lecture Hall 304', 'Lecture'),
(4, 'Lab 401', 'Lab'),
(4, 'Workshop 402', 'Workshop'),
(4, 'Classroom 403', 'Classroom'),
(4, 'Lecture Hall 404', 'Lecture'),
(5, 'Lab 501', 'Lab'),
(5, 'Workshop 502', 'Workshop'),
(5, 'Classroom 503', 'Classroom'),
(5, 'Lecture Hall 504', 'Lecture'),
(6, 'Lab 601', 'Lab'),
(6, 'Workshop 602', 'Workshop'),
(6, 'Classroom 603', 'Classroom'),
(6, 'Lecture Hall 604', 'Lecture'),
(7, 'Lab 701', 'Lab'),
(7, 'Workshop 702', 'Workshop'),
(7, 'Classroom 703', 'Classroom'),
(7, 'Lecture Hall 704', 'Lecture'),
(8, 'Lab 801', 'Lab'),
(8, 'Workshop 802', 'Workshop'),
(8, 'Classroom 803', 'Classroom'),
(8, 'Lecture Hall 804', 'Lecture');


CREATE TABLE Manager (
    manager_id INTEGER PRIMARY KEY AUTOINCREMENT,
    manager_name TEXT NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department (department_id)
);


INSERT INTO Manager (manager_name, department_id) VALUES 
('Kelly Adams', 1),        -- Data Science (Yarmouth Campus)
('Liam Gray', 2),          -- Mechanical Engineering (Yarmouth Campus)
('Sophia Lee', 3),         -- Healthcare (Yarmouth Campus)
('James Brown', 4),        -- Art & Design (Yarmouth Campus)
('Emily Davis', 5),        -- Pharmaceutical Studies (Kentville Campus)
('William Taylor', 6),     -- Healthcare Management (Kentville Campus)
('Olivia White', 7),       -- Engineering (Kentville Campus)
('Ethan Wilson', 8);       -- Business Administration (Kentville Campus)


CREATE TABLE Safety_Check (
    check_id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
    status TEXT NOT NULL,
    check_date DATE NOT NULL,
    deadline_date DATE NOT NULL,
    issues_found INTEGER NOT NULL,
    FOREIGN KEY (room_id) REFERENCES Room_Workshop (room_id),
    FOREIGN KEY (manager_id) REFERENCES Manager (manager_id)
);


INSERT INTO Safety_Check (room_id, manager_id, status, check_date, deadline_date, issues_found) VALUES 
(1, 1, 'Completed', '2025-01-02', '2025-01-31', 1),  
(2, 1, 'Incomplete', '', '2025-01-31', 0),  
(3, 1, 'Incompleted', '', '2025-03-31', 0),  
(4, 1, 'Incomplete', '', '2025-03-31', 0),  
(5, 2, 'Completed', '2025-01-08', '2025-01-31', 2),  
(6, 2, 'Completed', '2025-01-12', '2025-01-31', 0),  
(7, 2, 'Completed', '2025-01-12', '2025-03-31', 0),  
(8, 2, 'Completed', '2025-01-15', '2025-03-31', 1),  
(9, 3, 'Completed', '2025-01-03', '2025-01-31', 1),  
(10, 3, 'Incomplete', '', '2025-01-31', 0),  
(11, 3, 'Completed', '2025-01-10', '2025-03-31', 3),  
(12, 3, 'Incomplete', '', '2025-03-31', 0),  
(13, 4, 'Completed', '2025-01-05', '2025-01-31', 0),  
(14, 4, 'Completed', '2025-01-08', '2025-01-31', 0),  
(15, 4, 'Incomplete', '', '2025-03-31', 0),  
(16, 4, 'Completed', '2025-01-14', '2025-03-31', 1),  
(17, 5, 'Completed', '2025-01-02', '2025-01-31', 0),  
(18, 5, 'Incomplete', '', '2025-01-31', 0),  
(19, 5, 'Completed', '2025-01-09', '2025-03-31', 2),  
(20, 5, 'Completed', '2025-01-09', '2025-03-31', 0),  
(21, 6, 'Completed', '2025-01-07', '2025-01-31', 0),  
(22, 6, 'Incomplete', '', '2025-01-31', 0),  
(23, 6, 'Completed', '2025-01-11', '2025-03-31', 1),  
(24, 6, 'Incomplete', '', '2025-03-31', 0),  
(25, 7, 'Completed', '2025-01-03', '2025-01-31', 0),  
(26, 7, 'Incomplete', '', '2025-01-31', 0),  
(27, 7, 'Incomplete', '2025-01-15', '2025-03-31', 2),  
(28, 7, 'Incomplete', '', '2025-03-31', 0),  
(29, 8, 'Completed', '2025-01-06', '2025-01-31', 0),  
(30, 8, 'Completed', '2025-01-06', '2025-01-31', 0),  
(31, 8, 'Completed', '2025-01-12', '2025-03-31', 1),  
(32, 8, 'Completed', '2025-01-12', '2025-03-31', 0);



CREATE TABLE Users (
        userID INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        firstName TEXT,
        otherName TEXT,
        lastName TEXT,
        password CHAR(60) NOT NULL,
        dateCreated TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        lastLoggedIn TEXT
    );
