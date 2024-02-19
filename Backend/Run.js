// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const isEmail = require('validator').isEmail;

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb+srv://anmolsonkar:Anmolmongo2023@anmoldb.ta9zg8t.mongodb.net/data', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    age: {
        type: Number,
        required: [true, 'Please enter your age'],
        min: [18, 'Minimum age is 18']
    },
    country: {
        type: String,
        required: [true, 'Please select your country']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 8 characters']
    }
});

// Apply pre-save middleware to hash password before saving
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Define the User model
const User = mongoose.model('User', userSchema);

// Route to get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, '-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to create a new user
app.post('/users', async (req, res) => {
    const { name, email, age, country, password } = req.body;
    const user = new User({
        name,
        email,
        age,
        country,
        password
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to update a user by ID
app.put('/users/:id', async (req, res) => {
    try {
        const { name, email, age, country, password } = req.body;
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.name = name || user.name;
        user.email = email || user.email;
        user.age = age || user.age;
        user.country = country || user.country;
        if (password) {
            user.password = password;
        }
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to delete a user by ID
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
