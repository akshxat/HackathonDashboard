import express from 'express';
import db from '../utils/db.js';

//Creating Router for Express to route requests to 
const router = express.Router()
router.use(express.json())

// Endpoint to get safety check progress
router.get('/', (req, res) => {
    const { campusId, departmentId } = req.query;

    try {
        const query = `
            SELECT 
                SUM(CASE WHEN sc.status = 'Completed' THEN 1 ELSE 0 END) AS completed,
                SUM(CASE WHEN sc.status = 'Incomplete' THEN 1 ELSE 0 END) AS incomplete
            FROM Safety_Check sc
            JOIN Room_Workshop rw ON sc.room_id = rw.room_id
            JOIN Department d ON rw.department_id = d.department_id
            WHERE d.campus_id = ?
            AND (? IS NULL OR d.department_id = ?);
        `;

        // Prepare and execute the query
        const stmt = db.prepare(query);
        const result = stmt.get(campusId, departmentId || null, departmentId || null);

        const { completed, incomplete } = result || { completed: 0, incomplete: 0 };

        // Return the result as JSON
        res.json({ completed, incomplete });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch safety check progress' });
    }
});


export default router;