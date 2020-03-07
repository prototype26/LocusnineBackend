const port = 3000;
const axios  = require('axios');
const express = require('express');
const app = express();
app.use(express.json());

//get--/locusnineapi/v1/users
// app.get('/locusnineapi/v1/users',(req, res)=>{
//     axios.get('https://locusninedevdata.firebaseio.com/users.json').then(resp=>{
//         res.status(200).json({
//             status: 'success',
//             results: resp.data.length,
//             data: {
//                 users: resp.data
//             }
//         })
//     }).catch(error=>{
//         console.log(`Error fetching data:: ${error}`);
//         return null;
//     });
// });
//post--/locusnineapi/v1/users
//axios post request

// axios.post('https://locusninedevdata.firebaseio.com/users.json',req.body)
    //      .then(response=>console.log(`Data added successfully:: ${response.data}`))
    //      .catch(error=>{console.log(`Failed to add data:: ${error}`)}); 
    //      res.send('Data added.')
app.post('/locusnine/v1/users',(req,res)=>{
    console.log(req.body);
    res.send('Done');
});

app.listen(port,()=>{
    console.log(`App running on port :: ${port}`);
});

