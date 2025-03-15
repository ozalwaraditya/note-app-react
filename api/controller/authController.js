import jwt from 'jsonwebtoken';
import User from '../model/User.js';
import {errorHandler} from '../utils/error.js'

export const CreateAccount = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                message: 'Email already in use' 
            });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        // Generate JWT token
        const accessToken = jwt.sign(
            { id: newUser._id, email: newUser.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: '30m' }
        );

        res.status(201).json({ 
            success: true, 
            message: 'Account created successfully', 
            user: newUser, 
            token: accessToken 
        });
    } catch (error) {
        next(error);
    }
};


export const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ 
                success: false, 
                message: 'First create an account' 
            });
        }

        // Compare plain text password
        if (existingUser.password !== password) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid email or password' 
            });
        }

        // Generate JWT token
        const accessToken = jwt.sign(
            { id: existingUser._id, email: existingUser.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: '10h' }
        );

        return res.json({
            success: true,
            message: 'Login successful',
            user: { id: existingUser._id, email: existingUser.email, username: existingUser.username },
            accessToken
        });

    } catch (error) {
        next(error);
    }
};

export const GetUser = async (req, res, next) => {
    if (!req.user || !req.user.id) {
        return next(errorHandler(401, "Unauthorized! No user found in request."));
    }

    try {
        const isUser = await User.findById(req.user.id);

        if (!isUser) {
            return next(errorHandler(404, "User Not Found!!"));
        }

        res.status(200).json({
            success: true,
            user: {
                _id: isUser._id,
                username: isUser.username,
                email: isUser.email,
                createdOn: isUser.createdOn,
            },
        });

    } catch (error) {
        next(error);
    }
};