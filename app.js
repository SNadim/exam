// external imports
const express = require('express');
const dotenv = require('dotenv');

// internal imports
const loginRouter = require('./routes/loginRouter');
const inboxRouter = require('./routes/inboxRouter');
const usersRouter = require('./routes/usersRouter');
const {notFoundHandler,errorHandler} = require('./middlewares/common/errorHandler');

const app = express();
dotenv.config();

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// set view engine
app.set("view engine", "ejs");


 app.use("/",loginRouter);
// app.use("/users",usersRouter);
// app.use("/inbox",inboxRouter);

// 404 not found
app.use(notFoundHandler);

// default error

app.use(errorHandler);


app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})