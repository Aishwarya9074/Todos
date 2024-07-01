import express from "express";
import Task from "../../db/models/TaskSchema.js";
import checkToken from "../../middleware/checkToken.js";

const router = express.Router();
//create a task

router.post("/task/:id", checkToken(["USER"]), async (req, res) => {
  const { title, description, status } = req.body;
  const { id } = req.params; // Extract userId from request params

  try {
    // Create a new Task instance with userId
    const task = new Task({
      title,
      description,
      status,
      user: id, // Assign userId to task's user field
    });

    // Save the task to the database
    await task.save();

    return res.status(201).json({ message: "Task created", task });
  } catch (e) {
    console.error("Error creating task:", e);
    return res.status(500).json({ message: "Internal server error" });
  }
});
//view to admin  and manger all tasks

router.get("/", checkToken(["ADMIN", "MANAGER"]), async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (e) {
    return res.status(500).json({ message: "internal server error" });
  }
});
//user can vire their tasks

router.get(
  "/users/:id",
  checkToken(["ADMIN", "MANAGER", "USER"]),
  async (req, res) => {
    const { id } = req.params;
    console.log("Fetching tasks for user ID:", id); // Log the id to debug
    try {
      const taskUser = await Task.find({ user: id });
      if (!taskUser) {
        return res.status(404).json({ message: "Tasks not found" });
      }
      return res.status(200).json(taskUser);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }
);
router.get("/list/:userId", async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.params.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//update task

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updateTask = await Task.findByIdAndUpdate(id, body);
  return res.status(201).json({ message: "updated", updateTask });
});
//delete task
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const dltTask = await Task.findByIdAndDelete(id);
  return res.status(200).json({ message: "deleted", dltTask });
});

export default router;
