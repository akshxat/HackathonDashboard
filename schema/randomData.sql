-- Insert data into Campus table
INSERT INTO Campus (campus_id, campus_name) VALUES
(1, 'Downtown Campus'),
(2, 'Northside Campus'),
(3, 'Lakeside Campus');

-- Insert data into Department table
INSERT INTO Department (department_id, campus_id, department_name) VALUES
(1, 1, 'Computer Science'),
(2, 1, 'Engineering'),
(3, 2, 'Business'),
(4, 3, 'Arts and Design'),
(5, 3, 'Health Sciences');

-- Insert data into Room_Workshop table
INSERT INTO Room_Workshop (room_id, department_id, room_name, room_type, store_id) VALUES
(1, 1, 'Room 101', 'Classroom', NULL),
(2, 1, 'Lab A', 'Workshop', 101),
(3, 2, 'Room 201', 'Classroom', NULL),
(4, 3, 'Room 301', 'Classroom', NULL),
(5, 4, 'Studio A', 'Workshop', 102),
(6, 5, 'Room 401', 'Classroom', NULL);

-- Insert data into Safety_Check table
INSERT INTO Safety_Check (check_id, room_id, status, check_date, issues_found) VALUES
(1, 1, 'Pass', '2025-01-01', 0),
(2, 2, 'Fail', '2025-01-02', 3),
(3, 3, 'Pass', '2025-01-03', 0),
(4, 4, 'Pass', '2025-01-04', 0),
(5, 5, 'Fail', '2025-01-05', 2),
(6, 6, 'Pass', '2025-01-06', 0);

-- Insert data into Manager table
INSERT INTO Manager (manager_id, manager_name, department_id) VALUES
(1, 'Alice Johnson', 1),
(2, 'Bob Smith', 2),
(3, 'Catherine Lee', 3),
(4, 'Daniel Thompson', 4),
(5, 'Eva White', 5);
