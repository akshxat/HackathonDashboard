import express from 'express';
import { db } from '../app.js';
import { generateInsertStatement, generateUpdateStatement } from '../sqlgenerator.js';

//Creating Router for Express to route requests to 
const router = express.Router()
router.use(express.json())

//ENDPOINT #1: GET ALL the rooms given the department id
router.get('/:id', (req, res) => {
    try {
        //prepare statement and annouce it to datebase
        const statement = db.prepare('SELECT * FROM room_workshop WHERE department_id = ?')
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

//ENDPOINT #2: Delete a room given the room id 
router.delete('/:id', (req, res) => {
    try {
        //if there is variable piece of data, we need to handle if the id doesn't exist and the file can't be deleted so we need to send that response
        const statement = db.prepare('DELETE FROM room_workshop WHERE room_id = ?')
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

//ENDPOINT #3: Add to the room table 
router.post('/', (req, res) => {
    try {
        
        //if validation passed....

        const { sql, values } = generateInsertStatement('room_workshop', req.body)

        const statement = db.prepare(sql)

        //statement.run(values) is what returns an object with the changes property
        const result = statement.run(values)
        res.status(201).send(result)

    } catch (err) {
        console.error("Error during POST request:", err); // Log detailed error
        res.status(500).send({ message: 'Try Again Later' })
    }
})

//ENDPOINT #4: Update an entry in the department table given the department id 
router.patch('/:id', (req, res) => {
    try {

       //if validation passed.....

        const { sql, values } = generateUpdateStatement('room_workshop', req.body, 'room_id', req.params.id)

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