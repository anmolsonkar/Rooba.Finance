const mongoose = require('mongoose');
const isEmail = require('validator').isEmail;
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 8 characters']
    },
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    country: {
        type: String,
        required: [true, 'Please select your country']
    },
    age: {
        type: Number,
        required: [true, 'Please enter your age'],
        min: [18, 'Minimum age is 18']
    },
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};

const User = mongoose.model('User', userSchema);

module.exports = User;
