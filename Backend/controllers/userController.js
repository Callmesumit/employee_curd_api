import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      token: jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: '30d' })
    });
  } else {
    res.status(401).send("Invalid Email or Password");
  }
};