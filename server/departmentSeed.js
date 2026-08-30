import Department from './models/Department.js';
import connectToDatabase from './db/db.js';

const departmentRegister = async () => {
    try {
        await connectToDatabase();

        const existingDepartment = await Department.findOne({ dep_name: 'IT' });
        if (!existingDepartment) {
            const defaultDepartment = new Department({
                dep_name: 'IT',
                description: 'Default IT department sample',
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            await defaultDepartment.save();
            console.log('Department created: IT');
        } else {
            console.log('Department already exists: IT');
        }
    } catch (error) {
        console.log(error);
    }
};

departmentRegister();