import { Router } from "express";
import { createExam, deleteExamById, getAllExams, getExamById, updateExamById } from "../controllers/examController.js";
const router = Router();

router.post("/exams/create", createExam)
router.get('/exams/getExamById/:id', getExamById)
router.get('/exams/getAllExams', getAllExams)
router.delete('/exams/deleteExamById/:id', deleteExamById)
router.put('/exams/updateExamById/:id', updateExamById)

export default router;