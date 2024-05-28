import ExamModel from '../models/ExamModel.js'
import StudentModel from '../models/StudentModel.js'
export const createExam = async (req, res) => {
    try {
        const { subject, studentId, grade } = req.body
        const data = await ExamModel.create({
            subject,
            studentId,
            grade
        })
        res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const getExamById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await ExamModel.findByPk(id)
        res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }

}

export const getAllExams = async (req, res) => {
    try {
        const data = await ExamModel.findAll()
        res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const deleteExamById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await ExamModel.destroy({
            where: {
                id
            }
        })
        res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const updateExamById = async (req, res) => {
    try {
        const { id } = req.params
        const { subject, studentId, grade } = req.body
        const student = await StudentModel.findByPk(studentId);
        if (!student) {
            return res.status(404).json({ success: false, message: 'The student with the "studentId" attribute provided in the request was not found.' });
        }
        const data = await ExamModel.update({
            subject,
            studentId,
            grade
        }, {
            where: {
                id
            }
        })
        res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}