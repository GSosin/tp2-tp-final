import StudentModel from '../models/StudentModel.js'

export const createUser = async (req, res) => {
    try {
        const { name, lastName, school } = req.body
        console.log(req.body)
    const data = await StudentModel.create({
        name,
        lastName,
        school
    })
    res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
    console.log("hola")
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await StudentModel.findByPk(id)
        res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }

}

export const getAllUsers = async (req, res) => {
    try {
        const data = await StudentModel.findAll()
        res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await StudentModel.destroy({
            where: {
                id
            }
        })
        res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params
        const { name, lastName, school } = req.body
        const data = await StudentModel.update({
            name,
            lastName,
            school
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