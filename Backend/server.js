require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('Finanza Club Backend API is running');
});

// Import Routes (to be created)
const blogsRouter = require('./routes/blogs');
const eventsRouter = require('./routes/events');
const documentsRouter = require('./routes/documents');
const membersRouter = require('./routes/members');

app.use('/api/blogs', blogsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/documents', documentsRouter);
app.use('/api/members', membersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
