const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

const jwt_secret = process.env.JWT_SECRET;

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, jwt_secret, {
        expiresIn: maxAge,
    });
};

const handleErrors = (error) => {
    let errors = { email: '', password: '' };

    if (error.message === 'incorrect email') {
        errors.email = "That email is not registered";
    }

    if (error.message === 'incorrect password') {
        errors.password = "That password is incorrect";
    }

    if (error.code === 11000) {
        errors.email = 'That email is already exists';
        return errors;
    }

    if (error.message.includes("user validation failed")) {
        Object.values(error.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};

const signup_post = async (req, res, next) => {
    const { email, password, name, country, age } = req.body;
    try {
        const user = await User.create({ email, password, name, country, age });
        const token = createToken(user._id);
        res.cookie('jwt', token, { withCredentials: true, httpOnly: false, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id, created: true });

    } catch (error) {
        const errors = handleErrors(error);
        res.json({ errors, created: false });
    }
};

const login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id, status: true });
    } catch (error) {
        const errors = handleErrors(error);
        res.json({ errors, status: false });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id, '-password');
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: 'User not found' });
    }
};


const updateUserById = async (req, res) => {
    try {
        if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedPassword;
        }

        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ user: user, message: 'Profile updated sucessfully.' });
    } catch (error) {
        res.status(400).json({ message: 'User not found' });
    }

};


const deleteUserById = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Profile deleted sucessfully.' });
    } catch (error) {
        res.status(400).json({ message: 'User not found' });
    }
};

module.exports = {
    signup_post,
    login_post,
    getUserById,
    updateUserById,
    deleteUserById,
};


