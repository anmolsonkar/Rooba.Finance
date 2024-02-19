const User = require('../models/user.js');

const aggregateUserData = async (req, res, next) => {
    try {
        const aggregationResult = await User.aggregate([
            {
                $group: {
                    _id: null,
                    totalUsers: { $sum: 1 },
                    averageAge: { $avg: "$age" },
                    usersByCountry: { $push: { country: "$country", count: 1 } }
                }
            },
            {
                $unwind: "$usersByCountry"
            },
            {
                $group: {
                    _id: "$usersByCountry.country",
                    totalUsersByCountry: { $sum: "$usersByCountry.count" },
                    totalUsers: { $first: "$totalUsers" },
                    averageAge: { $first: "$averageAge" }
                }
            },
            {
                $project: {
                    _id: 0,
                    country: "$_id",
                    totalUsers: 1,
                    averageAge: 1,
                    totalUsersByCountry: 1
                }
            }
        ]);
        res.json(aggregationResult);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { aggregateUserData };


