//Dependency imports
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema')

//Data for testing 
const receipe1 = require('./receipe-app/src/test-data.json');
const receipe2 = require('./receipe-app/src/test-data2.json');
const receipe3 = require('./receipe-app/src/test-data3.json');

//Sever stuff (routing mostly)

//Initialise an app that will run as the server
const app = express();
const port = process.env.PORT || 3001

//Middleware  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //not sure what this line really does
//Set up GraphQL end point this is also middleware
app.use('/graphql', graphqlHTTP({
   schema,
   graphql: true
   }))
    

//Configure sever to listen on port 3001 and log a message
app.listen(port, () => {
    console.log(`Im alive and listening on port ${port}`); //Backtick allow me to insert var names and other code :)
});

//Simple Get request that responds with Hello World
app.get("/", (req, res) => {
    res.send("Hellllllllllllo World");
    //res.json(data);
});

//Get method to send a sample receipe to rect app
app.get("/receipe1", (req, res) => {
    console.log('Im the first reciiepe');
    res.json(receipe1);
});

        //Get method to send a second sample receipe to rect app
        app.get("/receipe2", (req, res) => {
            console.log('Looks like reciepe 2 was called ');
            res.json(receipe2);
        });

        //Get method to send a third sample receipe to rect app
        app.get("/receipe3", (req, res) => {
            console.log('Receipe 3 reporting for duty ');
            res.json(receipe3);
        });

//POST request that justs sends the message and the request info back to client
app.post('/api', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });

//Databse Stuff

//Initialise DB connection 
//CreateConnection takes an object argument with host, db name and login details
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodemysql'
   
});

//Connect to database using credientials from db object above
// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log('Success')
// });

// //Create DB for the server to connect to using a route
// app.get('/createdb', (req, res) => {
//    let sql = 'CREATE DATABASE nodemysql';
//    db.query(sql, (err, result) => {
//        if(err) 
//           throw err;
//        console.log(result);
//        res.send('Double success');
//    });
// });








//Might need this later for connecting react ot sever
//https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61
