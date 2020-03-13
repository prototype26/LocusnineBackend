const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

//DB connection
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(con=>{
    console.log('DB connected')
});

const port = process.env.PORT;
const userRouter = require('./routes/userRoutes/userRoutes');

//mounting of router
app.use('/locusnineapi/v1/users',userRouter);

app.listen(port,()=>{
    console.log(`App running on port :: ${port}`);
});

