import express from 'express';
import { db } from '../app.js';

//Creating Router for Express to route requests to 
const router = express.Router()
router.use(express.json())

router.get('/:id', (req, res) => {
    try {
        //prepare statement and annouce it to datebase
        const statement = db.prepare('SELECT * FROM manager WHERE department_id = ?')
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


export default router