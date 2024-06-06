import { Router, Response } from "express";
import Student from "../models/Student.m";

// Create a Router for student api endpoints
const studentRouter = Router();

/**
 * @route POST api/student/create
 * @description create a student object
 * @returns newly created student object
 */
studentRouter.post("/create", async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    const student = await Student.create({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
    res.status(201).send({ message: "Success", data: student });
  } catch (error: any) {
    res.status(400).send({ message: error.message, data: null });
  }
});

export default studentRouter;
