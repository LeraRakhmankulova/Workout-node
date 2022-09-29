import User from "../../models/userModel.js"
import asyncHandler from 'express-async-handler'

//@desc user registration
//@route post /api/users/
//@access public
export const registerUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body 

    const isUserExists = await User.findOne({email})

    if (isUserExists){
        res.status(404)
        throw Error('Данный пользователь уже зарегистрирован')
    }

    const user = await User.create({
        email, password
    })

    res.json(user)
})