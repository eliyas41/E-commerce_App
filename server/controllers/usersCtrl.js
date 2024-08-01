import User from "../model/User.js";

// @desc    Register user
// @route   POST /api/v1/users/register
// @access  Private/Admin

export const registerUserCtrl = async (req, res) => {
  const { fullname, email, password } = req.body;

  // Check user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    // throw
    res.json({
      msg: "Email already exist",
    });
  }

  // hash password
  // Create the user
  const user = await User.create({
    fullname,
    email,
    password
  });
  res.status(201).json({
    status: "success",
    message: "User Registered Successfully",
    data: user,
  })




};