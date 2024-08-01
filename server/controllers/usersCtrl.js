import User from "../model/User.js";

// @desc    Register user
// @route   POST /api/v1/users/register
// @access  Private/Admin

export const registerUserCtrl = async (req, res) => {
  res.json({
    msg: "User register controller"
  });
};