const express = require('express');
const { searchUsers } = require('../controllers/userController');
const { sendFriendRequest, getFriendRequests, respondToFriendRequest } = require('../controllers/friendController');

const router = express.Router();

router.get("/users/search", searchUsers);

router.post("/friends/request", sendFriendRequest);
router.get("/friends/requests", getFriendRequests);
router.put("/friends/request/:requestId", respondToFriendRequest);

module.exports = router;