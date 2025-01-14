CREATE TABLE Campus (
    campus_id INTEGER PRIMARY KEY,
    campus_name TEXT NOT NULL
);

CREATE TABLE Department (
    department_id INTEGER PRIMARY KEY,
    campus_id INTEGER NOT NULL,
    department_name TEXT NOT NULL,
    FOREIGN KEY (campus_id) REFERENCES Campus (campus_id)
);

CREATE TABLE Room_Workshop (
    room_id INTEGER PRIMARY KEY,
    department_id INTEGER NOT NULL,
    room_name TEXT NOT NULL,
    room_type TEXT NOT NULL,
    store_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES Department (department_id)
);

CREATE TABLE Safety_Check (
    check_id INTEGER PRIMARY KEY,
    room_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
    status TEXT NOT NULL,
    check_date DATE NOT NULL,
    issues_found INTEGER NOT NULL,
    FOREIGN KEY (room_id) REFERENCES Room_Workshop (room_id)
    FOREIGN KEY (manager_id) REFERENCES Manager (manager_id)
);

CREATE TABLE Manager (
    manager_id INTEGER PRIMARY KEY,
    manager_name TEXT NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Department (department_id)
);


