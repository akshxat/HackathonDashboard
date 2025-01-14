-- Insert data into Campus table
INSERT INTO Campus (campus_id, campus_name) VALUES
(1, 'Main Campus'),
(2, 'Westside Campus'),
(3, 'Southfield Campus'),
(4, 'Riverside Campus');

-- Insert data into Department table
INSERT INTO Department (department_id, campus_id, department_name) VALUES
(1, 1, 'Computer Science'),
(2, 1, 'Engineering'),
(3, 2, 'Business'),
(4, 3, 'Arts and Design'),
(5, 4, 'Health Sciences'),
(6, 2, 'Electrical Engineering'),
(7, 1, 'Mathematics'),
(8, 3, 'Psychology');

-- Insert data into Room_Workshop table
INSERT INTO Room_Workshop (room_id, department_id, room_name, room_type, store_id) VALUES
(1, 1, 'CS Lab 101', 'Computer Lab', 201),
(2, 1, 'CS Room 102', 'Classroom', NULL),
(3, 2, 'Engineering Lab A', 'Workshop', 202),
(4, 2, 'Engineering Room 201', 'Classroom', NULL),
(5, 3, 'Business Room 301', 'Classroom', NULL),
(6, 3, 'Business Conference Room', 'Conference Room', 203),
(7, 4, 'Studio A', 'Workshop', 204),
(8, 4, 'Design Room 401', 'Classroom', NULL),
(9, 5, 'Health Science Lab', 'Workshop', 205),
(10, 6, 'Electrical Engineering Lab', 'Workshop', 206),
(11, 7, 'Math Room 501', 'Classroom', NULL),
(12, 8, 'Psychology Room 601', 'Classroom', NULL);

-- Insert data into Manager table
INSERT INTO Manager (manager_id, manager_name, department_id) VALUES
(1, 'John Smith', 1),
(2, 'Rachel Green', 2),
(3, 'Mark Davis', 3),
(4, 'Olivia Brown', 4),
(5, 'Ethan Wilson', 5),
(6, 'Lily Carter', 6),
(7, 'James Lee', 7),
(8, 'Sophia Walker', 8);

-- Insert data into Safety_Check table
INSERT INTO Safety_Check (check_id, room_id, manager_id, status, check_date, issues_found) VALUES
(1, 1, 1, 'Pass', '2025-01-01', 0),
(2, 2, 1, 'Fail', '2025-01-02', 3),
(3, 3, 2, 'Pass', '2025-01-03', 0),
(4, 4, 2, 'Pass', '2025-01-04', 0),
(5, 5, 3, 'Pass', '2025-01-05', 0),
(6, 6, 3, 'Fail', '2025-01-06', 2),
(7, 7, 4, 'Pass', '2025-01-07', 0),
(8, 8, 4, 'Pass', '2025-01-08', 0),
(9, 9, 5, 'Fail', '2025-01-09', 1),
(10, 10, 6, 'Pass', '2025-01-10', 0),
(11, 11, 7, 'Pass', '2025-01-11', 0),
(12, 12, 8, 'Pass', '2025-01-12', 0);
