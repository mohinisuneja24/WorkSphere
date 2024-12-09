const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use('/api', userRoutes);



// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/job-mediator', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => res.send('API is running...'));

app.listen(5000, () => console.log('Server running on port 5000'));
