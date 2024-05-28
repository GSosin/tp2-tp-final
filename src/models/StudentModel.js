import { DataTypes, Model } from "sequelize"
import connection from "../connection.js"

class StudentModel extends Model {}

StudentModel.init(
    {
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps:false,
        sequelize: connection,
        modelName: "Student",
    }
)
export default StudentModel