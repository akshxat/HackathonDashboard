import express from 'express';
import db from '../utils/db.js';
import { generateInsertStatement, generateUpdateStatement } from '../sqlgenerator.js';
import { validateCampus } from '../validator.js'

//Creating Router for Express to route requests to 
const router = express.Router()
router.use(express.json())

//ENDPOINT #1: Get all the campuses
router.get('/', (req, res) => {
    //prepare statement and annouse it to the database
    const statement = db.prepare('SELECT campus_id, campus_name FROM campus')
    //send query to database and execute it
    const data = statement.all()
    //send data to the client
    res.json(data)
})


//ENDPOINT #2: Delete a campus given the campus id 
router.delete('/:id', (req, res) => {
    try {
        //if there is variable piece of data, we need to handle if the id doesn't exist and the file can't be deleted so we need to send that response
        const statement = db.prepare('DELETE FROM campus WHERE campus_id = ?')
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

//ENDPOINT #3: Add to the campus table 
router.post('/', (req, res) => {
    try {
        const validationResult = validateCampus(req.body)
        if (validationResult.error) {
            return res.status(422).send(validationResult.error)
        }

        //if validation passed....

        const { sql, values } = generateInsertStatement('campus', req.body)

        const statement = db.prepare(sql)

        //statement.run(values) is what returns an object with the changes property
        const result = statement.run(values)
        res.status(201).send(result)

    } catch (err) {
        console.error("Error during POST request:", err); // Log detailed error
        res.status(500).send({ message: 'Try Again Later' })
    }
})

//ENDPOINT #4: Update an entry in the campus table given the campus id 
router.patch('/:id', (req, res) => {
    try {

        const validationResult = validateCampus(req.body)
        if (validationResult.error) {
            return res.status(422).send(validationResult.error)
        }
        //if validation passed.....

        const { sql, values } = generateUpdateStatement('campus', req.body, 'campus_id', req.params.id)

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