import express from 'express';
import { db } from '../app.js';
import { generateInsertStatement, generateUpdateStatement } from '../sqlgenerator.js';
import { validateSafetyCheck } from '../validator.js';

//Creating Router for Express to route requests to 
const router = express.Router()
router.use(express.json())

//ENDPOINT #1: GET ALL the safety checks given the room_id
router.get('/:id', (req, res) => {
    try {
        //prepare statement and annouce it to datebase
        const statement = db.prepare('SELECT * FROM safety_check WHERE room_id = ?')
        //send query to database and execute it 
        const data = statement.all(req.params.id)
        if (!data) {
            return res.status(404).send()
        }
        //send data to the client
        res.send(data)

    } catch (err) {
        res.status(500).send({ message: 'Try Again Later' })
    }
})

//ENDPOINT #5: Get all safety checks based on the campus ID and optional department ID
router.get('/', (req, res) => {
    const campusId = req.query.campusId; // Get campusId from the query string
    const departmentId = req.query.departmentId; // Get departmentId from the query string
    console.log(`campusId: ${campusId}, departmentId: ${departmentId}`);
 
    if (!campusId) {
        return res.status(400).send({ message: "campusId is required" }); // Return error if campusId is missing
    }
 
    let query = `
        SELECT 
            Safety_Check.check_id,
            Department.department_name AS departmentName,
            Manager.manager_name AS managerName,
            Room_Workshop.room_name AS roomName,
            Safety_Check.status
        FROM 
            Safety_Check
        INNER JOIN Room_Workshop ON Safety_Check.room_id = Room_Workshop.room_id
        INNER JOIN Department ON Room_Workshop.department_id = Department.department_id
        INNER JOIN Manager ON Safety_Check.manager_id = Manager.manager_id
        WHERE 
            Department.campus_id = ?`;
 
    const params = [campusId];
 
    // Add department filter if departmentId is provided
    if (departmentId) {
        query += ` AND Department.department_id = ?`;
        params.push(departmentId);
    }
 
    query += `;`;
 
    try {
        const statement = db.prepare(query);
        const data = statement.all(...params); // Pass both campusId and departmentId if needed
        console.log(data); // Log the data to the console for debugging
        res.send(data); // Send the data back to the client
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
});


//ENDPOINT #2: Delete a check given the  id 
router.delete('/:id', (req, res) => {
    try {
        //if there is variable piece of data, we need to handle if the id doesn't exist and the file can't be deleted so we need to send that response
        const statement = db.prepare('DELETE FROM safety_check WHERE check_id = ?')
        const { changes } = statement.run([req.params.id])

        console.log(changes)
        if (!changes) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }

    } catch (err) {
        res.status(500).send({ message: 'Try Again Later' })

    }

})

//ENDPOINT #3: Add to the safety table 
router.post('/', (req, res) => {
    try {
         
        const validationResult = validateSafetyCheck(req.body)
        if (validationResult.error) {
            return res.status(422).send(validationResult.error)
        }
        
        //if validation passed....

        const { sql, values } = generateInsertStatement('safety_check', req.body)

        const statement = db.prepare(sql)

        //statement.run(values) is what returns an object with the changes property
        const result = statement.run(values)
        res.status(201).send(result)

    } catch (err) {
        console.error("Error during POST request:", err); // Log detailed error
        res.status(500).send({ message: 'Try Again Later' })
    }
})

//ENDPOINT #4: Update an entry in the manager table given the manager id 
router.patch('/:id', (req, res) => {
    try {
        const validationResult = validateSafetyCheck(req.body)
        if (validationResult.error) {
            return res.status(422).send(validationResult.error)
        }

       //if validation passed.....

        const { sql, values } = generateUpdateStatement('safety_check', req.body, 'check_id', req.params.id)

        const statement = db.prepare(sql)
        const { changes } = statement.run(values)

        console.log(changes)

        if (!changes) {
            res.status(404).send()
        } else {
            res.status(200).send()
        }

    } catch (error) {
        res.status(500).send({ message: "Try again later" });
    }



})


export default router