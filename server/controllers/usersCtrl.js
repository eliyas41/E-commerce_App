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
    return res.json({
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
  });
};

// @desc    Login user
// @route   POST /api/v1/users/login
// @access  Public

export const loginUserCtrl = async (req, res) => {
  const { email, password } = req.body;
  //Find the user in db by email only
  const userFound = await User.findOne({
    email,
  });
  if (userFound && await bcrypt.compare(password, userFound?.password)) {
    return res.json({
      status: "success",
      message: "User logged in successfully",
      userFound,
    })
  } else {
    return res.json({
      msg: "Invalid login",
    })
  }
};