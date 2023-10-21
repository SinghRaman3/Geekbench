

import User from "../models/User.js"

export const signin = async (req, res) => {
    const {email, password} = req.body;

    const oldUser = await User.findOne({email})

    if(!oldUser) res.status(400).json({message: "User doesn't exist"})
} 

export const signup = async (req, res) => {
    const {email, username, password} = req.body;

    const oldUser = await User.findOne(email)

    if(oldUser) res.status(400).json({message: "Email already exists"})

    const user = await User.create()
}