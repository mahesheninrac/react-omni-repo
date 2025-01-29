// controllers/userController.js
const User = require("../models/userModel");

const searchUsers = async (req, res) => {
    const { query } = req.query;
    const currentUserId = req.user._id; // Assuming you have middleware to attach the user to the request

    try {
        const users = await User.find({
            $or: [
                { name: { $regex: query, $options: "i" } }, // Case-insensitive search
                { email: { $regex: query, $options: "i" } },
            ],
            _id: { $ne: currentUserId }, // Exclude the current user
        }).select("-password"); // Exclude password from the response

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error searching users", error });
    }
};

module.exports = { searchUsers };