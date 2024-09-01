const { validationResult } = require("express-validator");
const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { sendEmail } = require("../utils/email");



exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const checkUser = await User.findOne({
            $or: [{ email: req.body.email }],
        });
        if (checkUser) {
            return res.status(409).json({ errors: [{ message: "User already exists" }] });
        }
        // const salt = bcrypt.genSaltSync(10);
        // const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        // // const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
        // req.body.password = hashedPassword;

        const newUser = new User(req.body);
        await newUser.save();

        return res.status(200).json({ message: "User registered successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ errors: [{ message: "Server error" }] });
    }
};


exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const checkUser = await User.findOne({
            $or: [{ email: req.body.email }, { username: req.body.username }],
        });
        if (!checkUser) {
            return res.status(401).json({ errors: [{ message: "Invalid Credentials" }] });
        }

        const validate = await bcrypt.compare(req.body.password, checkUser.password);
        if (!validate) {
            return res.status(401).json({ errors: [{ message: "Invalid Credentials" }] });
        }

        const { password, ...others } = checkUser._doc;
        const token = jwt.sign(
            { uid: checkUser._id.toHexString() },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );

        // if (checkUser.profileExists) {
        //     // if (checkUser.adminverification) {
        //     //     return res.status(200).json({ userData: others, token: token });
        //     // } else {
        //     //     return res.status(401).json({ errors: [{ message: "Admin will verify you" }] });
        //     // }
        // }
        {
            return res.status(200).json({ userData: others, token: token });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ errors: [{ message: "Server error" }] });
    }
};

exports.getRegisteredUsersByUsername = async (req, res) => {
    try{
        const username = req.params.username;
        const users = await User.find({username : username}).exec();
        return res.status(200).json({users}); 
    } catch (error){
        console.log("Error while Fetching Data", error);
    }
}

exports.getAllRegisteredUsers = async (req, res) => {
    try{
        const users = await User.find();
        return res.status(200).json(users);
    }
    catch(error){
        console.log("Error while Fetching Data", error);
    }
}