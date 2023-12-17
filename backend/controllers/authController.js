import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// user registration
export const register = async (req, res) => {
    try {

        //hashing password
        const salt = bcrypt.genSaltSync(10);
        console.log(req.body)
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.userName,
            email: req.body.email,
            password: hash,
            //photo: req.body.photo
        })

        await newUser.save();

        res.status(200).json({ success: true, message: 'Successfully created' })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create. Try again' })

    }
}

// user login
export const login = async (req, res) => {

    const email = req.body.email

    try {
        const user = await User.findOne({ email })

        // if user doesn't exist
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        //if user is exist then check the  password or compare the password
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        //if password is incorrect
        if (!checkCorrectPassword) {
            return res.status(402).json({ success: false, message: 'Incorrect email or password' })
        }
        const { password, role, ...rest } = user._doc

        //create jwt token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });

        //set token in the browser cookies and send responce to the client
        res.status(200).json({ token, data: { ...rest }, role, })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to login' })
    }
}