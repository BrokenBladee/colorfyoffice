const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const entries = require('./routes/api/entries');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//connect to Mongo
// // DB Config
const db = 'mongodb+srv://laurin:1234@colorfyofficeschedule.kpyb1.mongodb.net/colorfyofficeschedule?retryWrites=true&w=majority'

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/entries', entries);

//serve static assests if in production
if (process.env.NODE_ENV === 'production') {
  //Set Static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
