import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password: hashedPassword});

    try{
    await newUser.save();
    res.status(201).json('User created successfully!');
    }
    catch(error){
        next(error);
    }
}; 

export const signin = async (req,res,next)=>{
    const {email,password} = req.body;
    try {
        const validUser = await User.findOne({email:email});
        if(!validUser) return next(errorHandler(404,'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401,'Wrong Credentials!'));

        //if both correct, do authentication , the way we do authenticate is by adding a cookie, inside browser, create a hash token that includes
        //the id of the user and then save this token inside the browser
        //install jsonwebtoken

        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)   // store it .env file
        const {password:pass,...rest} = validUser._doc;          
        //now save this token as cookie
        res.cookie('access_token',token, {httpOnly:true}).status(200).json(rest);   // httponly:true ensures no other third party application can have access to our cookie.

        // We're getting password also in insomnia, remove it before sending it back
        // Therefore De-strucutre password with rest before response.cookie   
        
    } catch (error) {
        next(error);                // middle ware to handle error.
    }
};