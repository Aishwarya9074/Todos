import express from "express";
import User from "../../db/models/UserSchema.js";
import Task from "../../db/models/TaskSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ username: body.username });
  if (user) {
    return res.status(403).json({ message: "username already taken" });
  }
  if (body.password !== body.confirmPassword) {
    return res.status(403).json({ message: "password dont match" });
  }
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;
    await User.create(body);
    return res.status(201).json({ message: "signup sucessful" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});
router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ username: body.username });
  if (!user) {
    return res.status(403).json({ message: "user not found" });
  }
  const isMactching = await bcrypt.compare(body.password, user.password);
  if (!isMactching) {
    return res.status(403).json({ message: "username and password mismatch" });
  }
  const token = jwt.sign(
    { role: "USER", id: user._id },
    process.env.SECRET_KEY,
    { expiresIn: "10d" }
  );
 
  return res.status(201).json({ message: "login sucessfull", token: token });
});
//router for user profile
router.get('/:id',async(req,res)=>{
  const {id}=req.params
  const user=await User.findById(id);
  return res.status(200).json(user)
})
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users and tasks:", error);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;
