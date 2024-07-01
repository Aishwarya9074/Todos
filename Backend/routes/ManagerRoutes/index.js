import express from "express";
import Manager from "../../db/models/ManagerSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  const manager = await Manager.findOne({ managername: body.managername });
  if (manager) {
    return res.status(403).json({ message: "manager already taken" });
  }
  if (body.managerPassword !== body.confirmPassword) {
    return res.status(403).json({ message: "password dont match" });
  }
  try {
    const hashedPassword = await bcrypt.hash(body.managerPassword, 10);
    body.managerPassword = hashedPassword;
    await Manager.create(body);
    return res.status(201).json({ message: "signup sucessful" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});
router.post("/login", async (req, res) => {
    try{
        
  const body = { ...req.body };
  const manager = await Manager.findOne({ managername: body.managername });
  if (!manager) {
    return res.status(403).json({ message: "manager not found" });
  }
  const isMatching = await bcrypt.compare(
    body.managerPassword,
    manager.managerPassword
  );
  if (!isMatching) {
    return res.status(403).json({ message: "username and password mismatch" });
  }
  const token = jwt.sign(
    { role: "MANAGER", id: manager._id },
    process.env.SECRET_KEY,
    { expiresIn: "10d" }
  );

  return res.status(201).json({ message: "login sucessfull", token: token });
    }
    catch(e){
        return res.status(500).json({error:e.message})
    }
});

export default router;
