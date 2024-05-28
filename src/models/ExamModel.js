import { DataTypes, Model } from 'sequelize';
import StudentModel from './StudentModel.js';
import connection from '../connection.js';
class ExamModel extends Model {}

ExamModel.init(
    {
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: StudentModel,
                key: 'id',
              },
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        sequelize: connection,
        modelName: 'Exam',
    }
);

StudentModel.hasMany(ExamModel, { foreignKey: 'studentId' });
ExamModel.belongsTo(StudentModel, { foreignKey: 'studentId' });

export default ExamModel;
