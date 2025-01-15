import express from 'express';
import { db } from '../app.js';

//Creating Router for Express to route requests to 
const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
    const { campusId } = req.query;

    if (!campusId) {
        return res.status(400).send({ message: 'campusId is required' });
    }

    const statement = db.prepare(`
        SELECT 
            d.department_name AS departmentName,
            m.manager_name AS managerName,
            rw.room_name AS roomName,
            sc.status
        FROM Safety_Check sc
        JOIN Room_Workshop rw ON sc.room_id = rw.room_id
        JOIN Department d ON rw.department_id = d.department_id
        JOIN Manager m ON d.department_id = m.department_id  -- Corrected this line
        WHERE d.campus_id = ?
    `);

    const data = statement.all(campusId);
    res.send(data);
});



router.get('/:id', (req, res) => {
    try {
        //prepare statement and annouce it to datebase
        const statement = db.prepare('SELECT * FROM safety_check WHERE room_id = ?')
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


export default router