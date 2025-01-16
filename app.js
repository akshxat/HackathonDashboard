import express from 'express';
import Database from 'better-sqlite3';

const app = express();

//middlewares
app.use(express.json())
app.use('/campus', campusRouter)
app.use('/departments', departmentRouter)
app.use('/managers', managerRouter)
app.use('/rooms', roomRouter)
app.use('/safetyChecks', safetyCheckRouter)
// //Middleware to serve up static content- https://expressjs.com/en/starter/static-files.html
app.use(express.static('_FrontendFiles'))


//import routers
import campusRouter from './routes/campus.js'
import departmentRouter from './routes/departments.js'
import managerRouter from './routes/managers.js'
import roomRouter from './routes/rooms.js'
import safetyCheckRouter from './routes/safetyChecks.js'


//establish connection to databse & add safeguard to make sure file is there
export const db = new Database('databases/campusSafety.db', {fileMustExist: true})


//Listen for REQs on port 3000
app.listen(3000, () => {
    console.log('Listen on port 3000');
})

