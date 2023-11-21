/*
_________________________________________________________________________________________________________________________

/*1. Basic Structure
____________________________________________________________________________________________________________________________________________________

const express = require('express'); //here we ars importing the express package for creating the express application, It is the function

const app=express();

const port =3000;  //you can specify any port number But It should be constant.  it  cannot be change\

app.get('/',(req,res)=>{             // Here In am creating one callback function => It is called arrow function
    res.send('🥰🥰This is Express Application and Nodejs.Welcome to express Application.   Hello Everyone');
})
app.listen(port,()=>{
    console.log(`Server is starting on port ${port}`);
});

____________________________________________________________________________________________

*/



/*

______________________________________________________________________________________________

const express=require('express')

const app=express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('This is new app First route');
});

app.get('/welcome',(req,res)=>{
    res.send('This is new app Second Route');
});

app.get('/welcome/home',(req,res)=>{
    res.send('This is new app Third Route');
});


//Define  for single parameter
app.get('/user/:id',(req,res)=>{
    const userId=req.params.id
    res.send(`Your requested info for user with id ${userId}`)
})

app.get('/user/:name',(req,res)=>{
    const userName=req.params.name
    res.send(`Your requested info for user with id ${userName}`)
})

//Define for multiple parameter
app.get('/user/:id/books/:bookId',(req,res)=>{
    const userId=req.params.id
    const bookId=req.params.bookId
    res.send(`You have request for User Id :${userId}, and Book Id:${bookId}`)

})

app.get('/user/:id/book/:bookId/name/:name/age/:age',(req,res)=>{
    const userId=req.params.id
    const bookId=req.params.bookId
    const name=req.params.name
    const age=req.params.age
    res.send(`You have request for User Id :${userId},Book Id:${bookId},name:${name},and Age:${age}`)

})

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})

___________________________________________________________________________________________

*/


/*
_________________________________________________________________________________________

const express=require('express');

const app=express();

app.use(express.json()) //parse JSON bodies( we are sending the data  to  th json)

//post route
app.post('/api/user',(req,res)=>{


    const user=req.body

    

    res.status(201).json({message:'User created succesfully',user})

})

const port=3000

app.listen(port,()=>{
console.log(`Server started on port ${port}`)
})
_______________________________________________________________________

*/



/*
___________________________________________________________________________________--

const express=require('express');
const app=express()
app.get('/example',(req,res)=>{
    const condition=true
    if(condition){
        res.send("This is the first responsetrue")
        }
    else {
        res.send("This is the first responsefalse")
        }
            });

app.get('/example-midddleware',(req,res,next)=>{
    const condition=true
    if(condition){
        res.locals.responseText='This is the First response';
    }
    else{
        res.locals.responseText='This is the second response';
    }
    next();
})
app.use('/example-midddleware',(req,res)=>{
    res.send(res.locals.responseText);
});
            const port=3000
            app.listen(port,()=>{
                console.log(`Server started on port ${port}`)
            })
 _________________________________________________________________________________________       
 */           


/*
__________________________________________________________________________________
//ROUTE HANDLER



//Import the Express module
const express=require('express');

//Create an Instance of the Express application
const app = express();
const port=3000;

//Define a route handler for the home page
app.get('/',(req,res)=>{
    res.send('Hello,this is the home page!');
});

//Define a route handler for the about page
app.get('/about',(req,res)=>{
    res.send('Welcomee to the About Page!');
    });

//Define  a dynamic route with a parameter
app.get('/user/:userId',(req,res)=>{
    const userId=req.params.userId;
    res.send(`Hello,user ${userId}!`);
    });

//Define a route handler for handling POST requests
app.post('/submit',(req,res)=>{
    res.send('Submitted Succesfully!');
});

//Start the server and listen on the specified port
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});


_________________________________________________________________________________________________________________________
*/




/*
_________________________________________________________________________________________________________________________


const express=require('express');

const app=express();

const port=3000;


app.get('/example-midddleware',(req,res,next)=>{
    const condition=true
    if(condition){
        res.locals.responseText='This is the First response';
    }
    else{
        res.locals.responseText='This is the second response';
    }
    next();
})
app.use('/example-midddleware',(req,res)=>{
    res.send(res.locals.responseText);
});


app.get('/simple-midddleware',(req,res,next)=>{
    const condition=true;
    if(condition){
        res.locals.responseText='This is the First response of simple middleware';
    }
    else{
        res.locals.responseText='This is the second response of simple middleware';
    }
    next();
})
app.use('/simple-midddleware',(req,res)=>{
    res.send(res.locals.responseText);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});

_________________________________________________________________________________________________________________________
*/


/*
_________________________________________________________________________________________________________________________

const express = require('express'); 
const app = express();
// Regular middleware
app.use((req, res, next)=>{
     console.log('This is a regular middleware');
// Uncomment the line below to simulate an error
//next(new Error("This is a simulated error")).
next();
});
//Error handling middleware 
app.use((err, req, res, next)=>{ 
    console.error("Error handling middleware:", err.message); 
    res.status(500).send("Internal Server Error");
});
//Route handler 
app.get("/",(req, res)=> { 
    res.send('Hello. Expressjs!'); 
});
//Start the server 
const PORT=3000; 
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
    });
_________________________________________________________________________________________________________________________

*/



/*
_________________________________________________________________________________________________________________________


const express = require('express'); 
const app = express();
// Regular middleware

app.get('/search',(req,res)=>{
    console.log(req.query.q)
    console.log(req.query.lang)
});


//Start the server 
const PORT=3000; 
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
    });

    _________________________________________________________________________________________________________________________

*/





/*
Example 8
______________________________________________________________________________________________________________________


const express = require('express'); 
const app = express();
// Regular middleware

app.get('/method',(req,res)=>{
    console.log(req.method);
    
});


//Start the server 
const PORT=3000; 
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
    });
_________________________________________________________________________________________________________________________

*/




/*
Example-9

Request object method:
_______________________________________________________________________________________________________________________

const express = require('express'); 
const app = express();



app.get('/user',(req,res)=>{
    const useragent=req.get('User-Agent')
    console.log(useragent)
})


//start the server
const PORT=3000; 
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
    });



_________________________________________________________________________________________________________________________

*/

/*
Example-10
params
_________________________________________________________________________________________________________________________




const express = require('express'); 
const app = express();



app.get('/user/:id',(req,res)=>{
    const userID=req.param('id');
    res.send(`User ID  is ${userID}`)
})


//start the server
const PORT=3000; 
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
    });


_________________________________________________________________________________________________________________________

    */



/*
Example-11
Type
_________________________________________________________________________________________________________________________


const express = require('express'); 
const app = express();



app.post('/upload',(req,res)=>{
    if(req.is('json')){
    res.send('we have recieved JSON Format')
    }
    else{
        res.send('we have not recieved JSON Format')
        }
});

//start the server
const PORT=3000; 
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
    });

_________________________________________________________________________________________________________________________

    */




/*
Example-12
res.json
_________________________________________________________________________________________________________________________

const express=require('express')
const app=express()
const port =3000;
app.get('/user',(req, res)=>{
      res.json({message:'This is the express traning'})
});

app.listen(port,()=>{
    console.log(`sever is loading ${port}`)
})
_________________________________________________________________________________________________________________

    */


/*
Example-14
redirect
_________________________________________________________________________________________________________________________

const express=require('express')
const app=express()
const port =3000;
app.get('/user',(req, res)=>{
    
    res.redirect
    
    );

app.listen(port,()=>{
    console.log(`sever is loading ${port}`)
})
_________________________________________________________________________________________________________________

    */


/*
Example-15

_________________________________________________________________________________________________________________________

const express=require('express');
const app=express();

app.use((req, res,next)=>{
    console.log(`Request Recieved: ${req.method} ${req.url}`);
    next();
});

app.get('/hello',(req,res)=>{
    res.send('Hello World!');
});

app.get('/json',(req,res)=>{
    const data={ message:'Hello,Json!'};
    res.json(data)
});

app.get('/redirect',(req,res)=>{
   
    res.redirect('/hello')
});

const port =3000;
app.listen(port,()=>{
    console.log(`sever is starting on  ${port}`)
})
_________________________________________________________________________________________________________________

    */


/*
Example-16

_________________________________________________________________________________________________________________________

const express=require('express')
const app=express()
const port =3000;
app.get('/',(req, res)=>{
    
    res.send('Hello');
})

app.get('/api/data',(req,res)=>{
    const jsondata={
        message:'This is a json response',
        timestramp:new Date().toISOString()
        }
        res.json(jsondata)
});

app.listen(port,()=>{
    console.log(`sever is starting on  ${port}`)
});

_____________________________________________________________________________________________________________
*/



/*
Example-17

_________________________________________________________________________________________________________________________

const express=require('express')
const app=express()
const port =3000;
app.get('/',(req, res)=>{
    
    res.send('Hello');
})

app.get('/api/data',(req,res)=>{
    const jsondata={
        message:'This is a json response',
        timestramp:new Date().toISOString()
        }
        res.json(jsondata)
});


app.get('/html',(req,res)=>{
    const htmlContent='<h1>This is an HTML response</h1>';
    res.send(htmlContent);
});

app.get('/status',(req,res)=>{
        res.status(403).send('Access Forbidden');
});

app.use((req,res)=>{
    res.status(404).send('404 Not Found');
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('500 Internal Server Error');
});
app.listen(port,()=>{
    console.log(`sever is starting on  ${port}`)
});

_________________________________________________________________________________________________________________
*/







/*
Example-18

_________________________________________________________________________________________________________________________
const express=require('express')
const app=express()
const port =3000;
app.get('/',(req, res)=>{
    
    res.send('Hello');
})

app.get('/api/data',(req,res)=>{
    const jsondata={
        message:'This is a json response',
        timestramp:new Date().toISOString()
        }
        res.json(jsondata)
});


app.get('/html',(req,res)=>{
    const htmlContent='<h1>This is an HTML response</h1>';
    res.send(htmlContent);
});

app.get('/status',(req,res)=>{
        res.status(403).send('Access Forbidden');
});

app.use((req,res)=>{
    res.status(404).send('404 Not Found');
});

app.get('/redirect',(req,res)=>{
    res.redirect('https:.//www.facebook.com');
})
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('500 Internal Server Error');
});
app.listen(port,()=>{
    console.log(`sever is starting on  ${port}`)
});
_________________________________________________________________________________________________________________
*/


/*
Example-19

_________________________________________________________________________________________________________________________

const express=require('express')
const app=express()



app.get('/json',(req,res)=>{
    const jsonData={message :'hello!'}
    res.header('content-type','application/json')

    res.send(JSON.stringify(jsonData))
})



app.get('/',(req, res)=>{
    
    res.send('Hello');
})




app.get('/redirect',(req,res)=>{
    res.redirect('https:.//www.facebook.com');
})



const port =3000;
app.listen(port,()=>{
    console.log(`sever is starting on  ${port}`)
});

_________________________________________________________________________________________________________________
*/


/*
Example-20

_________________________________________________________________________________________________________________________


const express=require('express')
const app=express()


app.get('/redirect',(req,res)=>{
    res.redirect('https://www.facebook.com');
})


const port =3000;
app.listen(port,()=>{
    console.log(`sever is starting on  ${port}`)
});


_________________________________________________________________________________________________________________
*/



/*
Example-21

_________________________________________________________________________________________________________________________

const express=require('express')
const app=express()


app.get('/html',(req,res)=>{
    const htmlContent=`
    <!DOCTYPE html>
    <html>
    <head>
    <title>HTML Response</title>
    </head>
    <body>
    <h1>Hello, This is an HTML Response</h1>
    </body>
    </html>
    `;

    res.header('Content-Type','Text/html');

    res.send(htmlContent);
});


const port =3000;
app.listen(port,()=>{
    console.log(`sever is starting on  ${port}`)
});

_________________________________________________________________________________________________________________
*/




/*
Example-22

_________________________________________________________________________________________________________________________

const express=require('express')
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



const port =3000;
app.listen(port,()=>{
    console.log(`sever is starting on  ${port}`)
});

_________________________________________________________________________________________________________________
*/







/*
Example-23

_________________________________________________________________________________________________________________________

const express=require('express')
const cookieParser=require('cookie-parser');
const app=express();


app.use(cookieParser())

app.get('/',(req,res)=>{
    const username=req.cookies.username||'Guest';
    res.send(`Hello,${username}!`);
});

app.get('/set-cookie/:username',(req,res)=>{
    res.cookie('username',req.params.username);
    res.send('Cookie set!');
    });

app.get('/clear-cookie',(req,res)=>{
    res.clearCookie('username');
    res.send('Cookie cleared!');
});


const port =3000;
app.listen(port,()=>{
    console.log(`server is starting on  ${port}`)
});

_________________________________________________________________________________________________________________
*/




/*
Example-24

_________________________________________________________________________________________________________________________

const express=require('express')
const cookieParser=require('cookie-parser');
const session=require('express-session');

const app=express();


app.use(cookieParser());
app.use(session({
    secret:'Your-Secret_key',  //token
    resave:false,              //session will not be restored
    saveUninitialized:true,    //we can initialize the session again
}));

app.get('/',(req,res)=>{
    //access session dataa
    const username=req.session.username||'Guest';
    res.send(`Hello !,${username}!`);
});



app.get('/set-session/:username',(req,res)=>{
    req.session.username=req.params.username;
    res.send('Session data set!');
});

app.get('/clear-session',(req,res)=>{
    //clear session dataa
    req.session.destroy();
    res.send('Session data cleared!');
});

const port =3000;
app.listen(port,()=>{
    console.log(`server is starting on  ${port}`)
});
_________________________________________________________________________________________________________________
*/


/*
Example-25

_________________________________________________________________________________________________________________________
index.ejs:
------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title><%=title%></title>
</head>
<body>
    <h1><%=message%></h1>
</body>
</html>

index.js:
------------
const express=require('express')
const ejs=require('ejs')
const app = express();
const port=3000
app.set('view engine','ejs'); //setting the template engine ejs into the express app
app.get('/',(req,res)=>{
    res.render('index',{ title :'express with ejs', message : 'This is Pug App' })
})
app.listen(port,()=>{
        console.log(`sever is loading ${port}`)
     })
____________



_____________________________________________________________________________________________________
*/



     /*
Example-26

_________________________________________________________________________________________________________________________
index.pug:
------------
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title=title
    body 
    h2=title
    h1=message


index.js
-----------
const express=require('express')
const ejs=require('ejs')
const app = express();
const port=3000
app.set('view engine','pug'); //setting the template engine pug into the express app
app.set('views',__dirname+'/views')
app.get('/',(req,res)=>{
    res.render('index',{ title :'express with pug', message : 'Hello Bunny this is PUG !'})
})
app.listen(port,()=>{
        console.log(`sever is loading ${port}`)
     })
_________________________________________________________________________________________________________________
*/







     /*
Example-27

_________________________________________________________________________________________________________________________
index.ejs
-----------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title><%=data.title%></title>
</head>
<body>
    <h1><%=data.title%></h1>
    <p><%=data.message%></p>
</body>
</html>


index.js:
________

const express=require('express');

const app = express();

const port=3000;
app.set('view engine','ejs'); //setting the template engine pug into the express app

app.get('/',(req,res)=>{

    const data={
        title:'Express.js views Example and welcome to Express',
        message:'Rendering Views with data in Express.js and Welcome to Express',
    };
    res.render('index',{ data});
});
app.listen(port,()=>{
        console.log(`sever is loading at http://localhost:${port}`);
     });


_________________________________________________________________________________________________________________
*/



     /*
Example-27

_________________________________________________________________________________________________________________________
index.ejs:
-----------

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%=data.title%></title>
</head>
<body>
  <h1><%=data.title%></h1>
  <p><%=data.message%></p>
</body>
</html>




index.ejs
-----------

const express = require('express');
const app = express();
const port = 3000;
// Set EJS as the view engine
app.set('view engine', 'ejs');
// Define a route
app.get('/', (req, res) => {
  // Sample data
  const data = {
    title: 'Express.js Views Example and Welcome to Express',
    message: 'Rendering views with data in Express.js and Welome to Express',
  };
  // Render the 'index' view and pass the data
  res.render('index', { data });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
_________________________________________________________________________________________________________________
*/




     /*
Example-28

_________________________________________________________________________________________________________________________
1))index.js
---------\
const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home Page' });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


2))layout.ejs
------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= pageTitle %></title>
</head>
<body>
    <header>
        <h1><%= pageTitle %></h1>
    </header>
    <main>
        <%- body %>
    </main>
    <footer>
        <p>© 2023 Express Template Example</p>
    </footer>
</body>
</html>




3))home.ejs
-----------
<%- include('partial', { partialContent: 'Dynamic content goes here' }) %>



4))partial.ejs
-------------

<section>
    <h2>This is a partial view</h2>
    <p><%= partialContent %></p>
</section>



__________________________________________________________________________________________________________
*/

/*
Example-29
conditional reendering
----------------------------------


const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const isLoggedIn = false; // You would typically determine this based on user authentication
  // Conditional rendering based on whether the user is logged in or not
  if (isLoggedIn) {
    res.send('Welcome, user!');
  } else {
    res.send('Please log in.');
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


*/

/*
example-30
-----------


const express = require('express');
const app = express();
app.get('/fruits', (req, res) => {
  const fruits = ['APPLE','BANANA','ORANGE','MANGO']; 

  let fruitList='<ul>';

  for(const fruit of fruits){
    fruitList += `<li> ${fruit} </li>` ;
  }
  fruitList +='</ul>' ;
  res.send(`List of Fruits:${fruitList}`);
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



*/

/*

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/college', {
  useNewUrlParser: true, useUnifiedTopology: true
})
const userSchema = new mongoose.Schema({
  name: String,
  email: String
})
const students = mongoose.model('students', userSchema);
const newUser = new students({ name: 'John', email: 'ab@gmail.com' });
newUser.save((err, user) => {
  if (err) return console.error(err)
  console.log(user)
})
students.find({ name: 'John'}, (err, users) => {
  if(err) return console.error(err)
  console.log(users)
})

*/


/*
example -31
------------
FILE SYSTEM:
----------------------------


index.js
--------------
const fs = require('fs')
// Writing to a file
fs.writeFileSync('data.txt', 'Welcome to Database')
// Reading from a file
const data = fs.readFileSync('data.txt', 'utf-8')
console.log(data)
              
                               (or)



const fs=require('fs');

//writi ng to file
fs.writeFileSync('data.txt','Hello, this is Expressjs');

//reading from a file
const data=fs.readFileSync('data.txt','utf-8');
console.log(data);

data.txt
----------

*/



/*
example -32
------------
Mmory Storage
---------------------------

let inMemoryData=[];

inMemoryData.push({ id:1, name:'Jhon'})

const user = inMemoryData.find(u=> u.id ===1)

console.log(user)

*/


/*
read file


const express = require('express');
const fs = require('fs');
const app = express();
app.get('/readFile', (req, res) => {
  // Path to the file you want to read
  const filePath = 'file.txt';
  // Reading the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.send(data);
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/


/*
write file


const express = require('express');
const fs = require('fs');
const app = express();
app.get('/writeFile', (req, res) => {
  // Path to the file you want to write
  const filePath = 'newfile.txt';
  const content = 'Hello, this is the content of the new file!';
  // Writing the file asynchronously
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      return res.status(500).send('Error writing file');
    }
    res.send('File has been written successfully!');
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


*/


/*
Index.html

const express = require('express');
const app = express();
const port = 3000;
// Middleware to parse JSON and URL-encoded form data
app.use(express.json()); // we are sending the data in the form og json
app.use(express.urlencoded({ extended: true })); // if we have multiple routing then every routing should be 
// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// Handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    // Process form data here
    res.send(`Form data received: ${JSON.stringify(formData)}`);
});
// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



*/
/*
--------------Connect to Mongodb-----------------------
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 3000;
// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/college', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB');
})
// Define routes and start the server
app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
*/
/*
--------------Connect to MySql-----------------------
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mohan6040',
  database: 'college',
});
// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});
// Define routes and start the server
app.get('/', (req, res) => {
  res.send('Hello, MySQL!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


*/


/*
--------------Connect to MySql-----------------------
const express = require('express')
const router = express.Router(); // which is use to perform the routing. 
const Task = require('../models/task')
// Create a task
router.post('/task', async (req, res) => {
    try {
        const task = new Task(req.body)
        await task.save()
        res.status(201).send(task)
    } catch(error) {
        res.status(400).send(error);
    }
    console.log("Data Inserted Successfully")
})
// Read all task
router.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.send(tasks);
    } catch (error) {
      res.status(500).send(error);
    }
    console.log("Fetched Data Successfully")
  });
  // Update a task by ID
router.patch('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    } catch (error) {
      res.status(400).send(error);
    }
    console.log("Data Updated!")
  });
  // Delete a task by ID
router.delete('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    } catch (error) {
      res.status(500).send(error);
    }
    console.log("Data Deleted!")
  });
  
  module.exports = router;

*/



/*
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000; 
mongoose.connect('mongodb://127.0.0.1/task4', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
// Middleware
app.use(bodyParser.json());
// Routes
app.use('/api', require('./routes/task'));
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

*/

/*

------------------------------------sequelize---------------------------
const express = require('express');
const Sequelize = require('sequelize');
// Create an Express application
const app = express();
// Sequelize configuration
const sequelize = new Sequelize('college', 'root', 'Mohan6040', {
  host: 'localhost',
  dialect: 'mysql',
});
// Define a model
const User = sequelize.define('User', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});
// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
  // Express route to create a new user
app.get('/createUser', async (req, res) => {
  try {
    const newUser = await User.create({ // create is use to create the record in the table
      firstName: 'Mohan',
      lastName: 'Vinodh',
    });
    res.json(newUser);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Express route to get all users
app.get('/getUsers', async (req, res) => {
  try {
    const users = await User.findAll(); // findall is use to get all the records from table
    res.json(users);
  } catch (err) {
    console.error('Error getting users:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

*/

/*
-------------------bcrypt session---------------------------------------
-----------| register |----| login |-----| dashboard |--------| logout |-----------------
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt'); //  it will convert password into hashed encrypted
const app = express();

// Use body-parser to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express-session to manage user sessions
app.use(session({
  secret: 'your-secret-key', // Change this to a secure random key
  resave: false,
  saveUninitialized: true
}));
// In-memory database for simplicity (replace with a real database in production)
const users = []; // for storing the users data into memory
// Middleware to check if the user is logged in
function requireLogin(req, res, next) { // name of middleware
  if (req.session.userId) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}
// Register endpoi
// Register endpoint
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
      return res.status(400).send('Username already exists');
    }
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10); // hash function convert the password into the encrypted format
    // Store the user in the in-memory database
    users.push({
      id: users.length + 1, // it will find the length of array 0 + 1
      username,
      password: hashedPassword
    });
    res.status(201).send('User registered successfully');
  });
  // Login endpoint
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Find the user by username
    const user = users.find(user => user.username === username);
    // Check if the user exists
  if (!user) {
    return res.status(401).send('Invalid username or password');
  }
  // Check if the provided password matches the hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (passwordMatch) {
    // Set the user ID in the session to mark the user as logged in
    req.session.userId = user.id;
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid username or password');
  }
});
// Protected endpoint that requires authentication
app.get('/dashboard', requireLogin, (req, res) => {
  res.send(`Welcome to the dashboard, user ${req.session.userId}`);
});
// Logout endpoint
app.post('/logout', (req, res) => {
  // Destroy the session to log the user out
  req.session.destroy(() => {
    res.status(200).send('Logout successful');
  });
});
const PORT = 4000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

*/



/*
--------------------passport-local----------------------------------

const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // name of class which define the strategy about the username and password.
const session = require('express-session');
const flash = require('express-flash') // it is use in case of passport to connect with the username and password.
const app = express();
// Set up session middleware
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(flash()) // shoudl be connect to the username and password
// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize()); // we are initializing the passport
app.use(passport.session()); // if any session is activated or not
// Set up your local strategy for Passport
passport.use(
  new LocalStrategy((username, password, done) => { // name of class which set the local strategy for passport
     // Replace this with your actual authentication logic
     if (username === 'user' && password === 'password') {
        return done(null, { id: 1, username: 'user' });
      } else {
        return done(null, false, { message: 'Incorrect username or password' });
      }
    })
  );
  // Serialize user information to store in the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // Deserialize user information from the session
  passport.deserializeUser((id, done) => { // use for maintaining the session
    // Replace this with your actual user retrieval logic
    const user = { id: 1, username: 'user' };
    done(null, user);
  });
  // Define routes
  app.get('/', (req, res) => {
    res.send('Home Page');
  });
  app.get('/login', (req, res) => {
    res.send('Login Page');
  });
// Passport middleware to handle authentication
app.post(
    '/login',
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
      failureFlash: true,
    })
  );
  app.get('/dashboard', isAuthenticated, (req, res) => {
    res.send(`Welcome, ${req.user.username}!`);
  });
  // Logout route
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  // Middleware to check if the user is authenticated
  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


*/

/*
----------------------Swagger-API -----------------------------------

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();
const port = 3000;
// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express Swagger API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes
};
const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// Sample route
app.get('/api/greet', (req, res) => {
  /**
   * @swagger
   * /api/greet:
   *   get:
   *     summary: Returns a greeting message
   *     responses:
   *       200:
   *         description: A successful response
   *         content:
   *           application/json:
   *             example:
   *               message: 'Hello, World!'
   **
  res.json({ message: 'Hello, World!'})

});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


*/
/*
----------------testing---------------------------------
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});
module.exports = app; // Export the app for testing

*/

/*
---------chai http__mocha chai__supertest-------------------

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!'});
});

// Export the app for testing
module.exports = app; 
*/

/*
-------------------test cases for routes and middleware-----------------------------------------------------



const express = require('express');
const app = express();
// Middleware
const sampleMiddleware = (req, res, next) => {
  // Do something in the middleware
  console.log('Middleware executed');
  next();
};
// Routes
app.use(sampleMiddleware);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/api/data', (req, res) => {
  res.json({ message: 'API data response' });
});
module.exports = app;

*/

/*

*/


const express=require('express');

const app=express()

app.get('/',(req,res)=>{
  res.send('Hello World')

})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});