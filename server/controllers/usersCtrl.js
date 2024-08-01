import User from "../model/User.js";
import bcrypt from 'bcryptjs'
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
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // Create the user
  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
  });
  res.status(201).json({
    status: "success",
    message: "User Registered Successfully",
    data: user,
  })




};