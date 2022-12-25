import express from 'express';
import bodParser from "body-parser";
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import cors from 'cors';
import bcrypt from 'bcrypt';
import User from './modals/User.js';


const app = express();

// app.use(bodParser.urlencoded({ extended: true }));

app.use(bodParser.json());

app.use(cookieParser());

app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true
  }
));

mongoose.connect('mongodb://localhost:27017/Redly', {
  // useNewUrlParser: true,
  // useFindAndModify: false,
  // useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// app.use(Router);

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//api end point to posting to /register or if someone post to / regsiter
app.post('/register', (request, response) => {
  const { email, username } = request.body;
  const password = bcrypt.hashSync(req.body.password, 10);
  const User = new User({ email, username, password });
  User.save().then(() => {
    res.sendStatus(201);
  }).catch(e => {
    console.log(e);
    res.sendStatus(500);
  })

});


app.listen(4000);
