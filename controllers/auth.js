const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// Register User (POST METHOD) (/api/v1/auth/register)
// Public route
exports.register = asyncHandler(async (req, res, next) => {
    
    const { name, email, password, role } = req.body;

    // Create User
    const user = await User.create({
        name,
        email,
        password,
        role
    });

    // Create token 
    const token = user.getSignedJwtToken();

    res.status(200).json({
        success: true,
        token
    })

})