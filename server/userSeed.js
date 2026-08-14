import User from './models/User.js'
import bcrypt from 'bcryptjs'


const userRegister = async () => {
    try {
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "Admin",
            email: "admin@example.com",
            password: hashPassword,
            role: "admin",
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
}

userRegister();