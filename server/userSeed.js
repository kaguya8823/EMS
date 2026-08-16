import User from './models/User.js';
import bcrypt from 'bcryptjs';
import connectToDatabase from './db/db.js';

const userRegister = async () => {
    try {
        await connectToDatabase();

        const adminPassword = await bcrypt.hash('admin', 10);
        const employeePassword = await bcrypt.hash('employee', 10);

        // Admin 用ユーザー
        const existingAdmin = await User.findOne({ email: 'admin@example.com' });
        if (!existingAdmin) {
            const adminUser = new User({
                name: 'Admin',
                email: 'admin@example.com',
                password: adminPassword,
                role: 'admin',
            });
            await adminUser.save();
            console.log('Admin user created: admin@example.com / admin');
        } else {
            console.log('Admin user already exists.');
        }

        // Employee 用ユーザー
        const existingEmployee = await User.findOne({ email: 'employee@example.com' });
        if (!existingEmployee) {
            const employeeUser = new User({
                name: 'Employee',
                email: 'employee@example.com',
                password: employeePassword,
                role: 'employee',
            });
            await employeeUser.save();
            console.log('Employee user created: employee@example.com / employee');
        } else {
            console.log('Employee user already exists.');
        }
    } catch (error) {
        console.log(error);
    }
};

userRegister();