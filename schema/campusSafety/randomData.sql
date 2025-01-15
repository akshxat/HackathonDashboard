-- Insert more data into Campus
INSERT INTO Campus (campus_name) VALUES 
('Yarmouth Campus'),
('Kentville Campus'),
('Amherst Campus'),
('Antigonish Campus'),
('Pictou Campus');

-- Insert more data into Department
INSERT INTO Department (campus_id, department_name) VALUES 
(1, 'Data Science'),
(1, 'Mechanical Engineering'),
(2, 'Pharmaceutical Studies'),
(3, 'Healthcare Management'),
(4, 'Accounting'),
(5, 'Graphic Design'),
(6, 'Environmental Studies'),
(7, 'Culinary Arts'),
(8, 'Education'),
(9, 'Hospitality and Tourism'),
(10, 'Veterinary Science');

-- Insert more data into Room_Workshop
INSERT INTO Room_Workshop (department_id, room_name, room_type, store_id) VALUES 
(1, 'Lab 201', 'Lab', 4),
(1, 'Lab 202', 'Lab', NULL),
(2, 'Workshop B', 'Workshop', 5),
(3, 'Simulation Room 2', 'Simulation', NULL),
(4, 'Lecture Hall 1', 'Lecture', NULL),
(5, 'Studio 10', 'Studio', 6),
(6, 'Eco Lab 1', 'Lab', NULL),
(7, 'Kitchen A', 'Kitchen', NULL),
(8, 'Classroom 3', 'Classroom', NULL),
(9, 'Training Room 5', 'Training', 7),
(10, 'Animal Lab 1', 'Lab', NULL),
(1, 'AI Lab 1', 'Lab', 8),
(2, 'Robotics Workshop', 'Workshop', 9),
(3, 'Virtual Simulation Lab', 'Simulation', NULL),
(4, 'Accounting Lab 101', 'Lab', 10);

-- Insert more data into Manager
INSERT INTO Manager (manager_name, department_id) VALUES 
('Fiona Hart', 6),
('George Lopez', 7),
('Hannah White', 8),
('Ian Black', 9),
('Jackie Brown', 10),
('Kelly Adams', 1),
('Liam Gray', 2),
('Mariah Davis', 3),
('Nathan Green', 4),
('Olivia Clark', 5);

-- Insert more data into Safety_Check
INSERT INTO Safety_Check (room_id, manager_id, status, check_date, issues_found) VALUES 
(7, 6, 'Passed', '2025-01-02', 0),
(8, 7, 'Failed', '2025-01-06', 1),
(9, 8, 'Passed', '2025-01-07', 0),
(10, 9, 'Passed', '2025-01-09', 0),
(11, 10, 'Failed', '2025-01-11', 2),
(12, 1, 'Pending', '2025-01-14', 1),
(13, 2, 'Passed', '2025-01-13', 0),
(14, 3, 'Passed', '2025-01-15', 0),
(15, 4, 'Failed', '2025-01-12', 3),
(16, 5, 'Passed', '2025-01-10', 0),
(17, 6, 'Pending', '2025-01-13', 1),
(18, 7, 'Failed', '2025-01-09', 2),
(19, 8, 'Passed', '2025-01-05', 0),
(20, 9, 'Passed', '2025-01-08', 0);
