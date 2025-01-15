import express from 'express';
import Database from 'better-sqlite3';

const app = express();

//middlewares
app.use(express.json())
app.use('/departments', departmentRouter)
app.use('/managers', managerRouter)
app.use('/rooms', roomRouter)
app.use('/safetyChecks', safetyCheckRouter)


//import routers
import departmentRouter from './routes/departments.js'
import managerRouter from './routes/managers.js'
import roomRouter from './routes/rooms.js'
import safetyCheckRouter from './routes/safetyChecks.js'

//establish connection to databse & add safeguard to make sure file is there
export const db = new Database('campusSafety.db', {fileMustExist: true})

//ENDPOINT #1: Get all the campuses
app.get('/campuses', (req, res) => {
    //prepare statement and annouse it to the database
    const statement = db.prepare('SELECT * FROM campus')
    //send query to database and execute it
    const data = statement.all()
    //send data to the client
    res.send(data)
})

//Listen for REQs on port 3000
app.listen(3000, () => {
    console.log('Listen on port 3000');
})