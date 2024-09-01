const User = require("../models/user.models");


exports.getcount = async (req, res) => {
    try {
        const results = await User.find().exec();
        const count = results.length;
        return res.status(200).json({ count: count });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ errors: [{ message: "Server error" }] });
    }
};

