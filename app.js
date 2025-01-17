import express from 'express';
import db from './utils/db.js';
//import routers
import campusRouter from './routes/campus.js'
import departmentRouter from './routes/departments.js'
import managerRouter from './routes/managers.js'
import roomRouter from './routes/rooms.js'
import safetyCheckRouter from './routes/safetyChecks.js'
import safetyCheckProgressRouter from './routes/safetyCheckProgress.js'
import loginRouter from './routes/login.js'

const app = express();


//Middlewares
app.use(express.json())
app.use('/campus', campusRouter)
app.use('/departments', departmentRouter)
app.use('/managers', managerRouter)
app.use('/rooms', roomRouter)
app.use('/safetyChecks', safetyCheckRouter)
app.use('/safetyCheckProgress', safetyCheckProgressRouter)
// Middleware to serve static files
app.use('/login', loginRouter)
app.use(express.static('auth'))
app.use(express.static('testDashboard'))
app.use(express.static('_FrontendFiles'))


//export const db = new Database('database/campusSafety.db', {fileMustExist: true});


//Listen for REQs on port 3000
app.listen(3000, () => {
    console.log('Listen on port 3000');
})

