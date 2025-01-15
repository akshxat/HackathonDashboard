import express from 'express';
import { db } from '../app.js';

//Creating Router for Express to route requests to 
const router = express.Router()
router.use(express.json())

//ENDPOINT #1: GET ALL the departments give the campus id 
router.get('/:id', (req, res) => {
    try {
        //prepare statement and annouce it to datebase
        const statement = db.prepare('SELECT * FROM department WHERE campus_id = ?')
        //send query to database and execute it 
        const data = statement.get(req.params.id)
        if (!data) {
            return res.status(404).send()
        }
        //send data to the client
        res.send(data)

    } catch (err) {
        res.status(500).send({ message: 'Try Again Later' })
    }
})

//ENDPOINT #2: Delete a department given the department id 

//ENDPOINT #3: Add to the department table 

//ENDPOINT #4: Update an entry in the department table given the department id 

export default router