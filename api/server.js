import express from 'express';
import bodParser from "body-parser";
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import cors from 'cors';
import bcrypt from 'bcrypt';
import User from './modals/User.js';
import Comment from './modals/Comment.js';
import jwt from 'jsonwebtoken';

const secret = 'secret123';
const app = express();
app.use(cookieParser());
app.use(bodParser.urlencoded({ extended: true }));
app.use(bodParser.json());
app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true
  }
));

function getUserFromToken(token) {
  const userInfo = jwt.verify(token, secret);
  return User.findById(userInfo.id);
}


mongoose.connect('mongodb://localhost:27017/Redly', { useNewUrlParser: true, useUnifiedTopology: true, });
const db = mongoose.connection;
db.on('error', console.log);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//api end point to posting to /register or if someone post to / regsiter
app.post('/register', (req, res) => {
  const { email, username } = req.body;
  const password = bcrypt.hashSync(req.body.password, 10);
  const user = new User({ email, username, password });
  user.save().then(user => {
    jwt.sign({ id: user._id }, secret, (err, token) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(201).cookie('token', token).send("done");
      }
    });
  }).catch(e => {
    console.log(e);
    res.sendStatus(500);
  });
});

// end point to get the user information
app.get('/user', (req, res) => {
  const token = req.cookies.token;
  console.log("token", token)
  getUserFromToken(token)
    .then(user => {
      res.json({ username: user.username });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });


});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then(user => {
    if (user && user.username) {
      const passOk = bcrypt.compareSync(password, user.password);
      if (passOk) {
        jwt.sign({ id: user._id }, secret, (err, token) => {
          res.cookie('token', token).send();
        });
      } else {
        res.status(422).json('Invalid username or password');
      }
    } else {
      res.status(422).json('Invalid username or password');
    }
  });
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').send();
});

app.get('/comments', (req, res) => {
  Comment.find().then(comments => {
    res.json(comments);
  })
})

app.listen(4000);
