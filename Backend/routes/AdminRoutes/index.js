import express from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Task from "../../db/models/TaskSchema.js";
import Admin from "../../db/models/AdminSchema.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  const admin = await Admin.findOne({ Adminname: body.Adminname });
  if (admin) {
    return res.status(403).json({ message: "adminname already taken" });
  }
  if (body.password !== body.confirmPassword) {
    return res.status(403).json({ message: "password dont match" });
  }
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;
    await Admin.create(body);
    return res.status(201).json({ message: "signup sucessful" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});
router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const admin = await Admin.findOne({ Adminname: body.Adminname });
  if (!admin) {
    return res.status(403).json({ message: "admin not found" });
  }
  const isMatching = await bcrypt.compare(body.password, admin.password);
  if (!isMatching) {
    return res.status(403).json({ message: "username and password mismatch" });
  }
  const token = jwt.sign(
    { role: "ADMIN", id: admin._id },
    process.env.SECRET_KEY,
    { expiresIn: "10d" }
  );

  return res.status(201).json({ message: "login sucessfull", token: token });
});
//get the users 
// Route for admin to get tasks of a user
router.get('/tasks/users/:id',  async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.find({ user: id });
    if (!tasks.length) {
      return res.status(404).json({ message: "No tasks found for this user" });
    }
    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ message: "Server error" });
  }
});


export default router;
