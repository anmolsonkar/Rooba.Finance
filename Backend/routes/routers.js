const requestLogger = (req, res, next) => {
    console.log(
        `[${new Date().toISOString()}] ${req.method}: ${req.originalUrl}, AccessToken: "${req.headers.authorization
        }"`
    );
    next();
};

const {
    signup_post,
    login_post,
    getUserById,
    updateUserById,
    deleteUserById
} = require("../controllers/authController.js");

const { checkUser } = require("../middleware/authMiddleware.js");

const { aggregateUserData } = require("../middleware/aggregation.js");


const router = require("express").Router();

router.use(requestLogger);

router.post('/', checkUser);

router.post('/users', signup_post);

router.post('/user', login_post);

router.get('/users/:id', getUserById);

router.put('/users/:id', updateUserById);

router.delete('/users/:id', deleteUserById);

router.get('/users/aggregation', aggregateUserData);


module.exports = router;